from fastapi import FastAPI
import spacy
import spacy_transformers
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set this to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


nlp = spacy.load('model-best')
smallModel = spacy.load('en_core_web_sm')

depts = {}

class Department:

    def __init__(self, name=''):
        self._name = name
        self._items = []

    def getItems(self):
        return self._items

    def getName(self):
        return self._name

    def setName(self, name):
        self._name = name

    def setItems(self, items):
        self._items = items

    def addItem(self, item):
        self._items.append(item)

class Item:

    def __init__(self, name='', description='', count=1, dept=''):
        self._name = name
        self._description = description
        self._count = count
        self._dept = dept
        self._done = False

    def getName(self):
        return self._name

    def getDescription(self):
        return self._description

    def getCount(self):
        return self._count

    def getDept(self):
        return self._dept

    def setName(self, name):
        self._name = name

    def setDone(self):
        self._done = not self._done

    def setDescription(self, description):
        self._description = description

    def setCount(self, count):
        self._count = count

    def setDept(self, dept):
        self._dept = dept

    def addCount(self):
        self._count += 1

    def subtractCount(self):
        self._count -= 1

@app.get("/")
async def root():
    return {"message": "NLP Grocery App API"}

@app.get("/data")
async def data():
    message = []
    for dept in depts:
        temp = {'name': dept, 'items': []}
        for item in depts[dept].getItems():
            temp['items'].append({"name": item.getName(), "description": item.getDescription(), "count": str(item.getCount())})
        message.append(temp)
    return message

@app.get("/add/{text}")
async def add(text: str):
    name = getName(text).lower()
    dept, confidence = getDepartment(name)
    count = getCount(text)
    if dept not in depts:
        depts[dept] = Department(name=dept)
        depts[dept].addItem(Item(dept=dept, name=name.title(), count=count))
    else:
        depts[dept].addItem(Item(dept=dept, name=name.title(), count=count))

@app.get("/mark/{item}")
async def mark(item: str):
    markItem(item.title())

@app.get('/increase/{target}')
async def increase(target: str):
    for dept in depts:
        for i, item in enumerate(dept.getItems()):
            if item.getName() == target.title():
                item.addCount()

@app.get('/decrease/{target}')
async def increase(target: str):
    for dept in depts:
        for i, item in enumerate(dept.getItems()):
            if item.getName() == target.title():
                item.subtractCount()


@app.get("/delete")
async def delete():
    depts.clear()

@app.get('/copy')
async def copy():
    message = ''
    for dept in depts:
        message += dept + ':\n'
        for item in depts[dept].getItems():
            message += item.getName() + ' - ' + str(item.getCount()) + ' ' + item.getDescription() + '\n'
        message += '\n'
    return {'message': message}

def markItem(target):
    for dept in depts:
        for i, item in enumerate(dept.getItems()):
            if item.getName() == target.title():
                item.setDone()


def getDepartment(text):
    cats = nlp(text).cats
    dept = max(cats, key=cats.get)
    return dept.title(), cats[dept]

def getName(text):
    doc = smallModel(text)
    name = ''
    for i in doc:
        if 'NUM' not in i.pos_:
            name += str(i) + ' '
    return name

def getCount(text):
    doc = smallModel(text)
    for i in doc:
        if 'NUM' in i.pos_:
            return int(str(i))
            break
    return 1

