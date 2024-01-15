# BERT-Spacy Grocery List Classifier

## Overview
This repository hosts a sophisticated grocery list application that integrates the 'roberta-base' model within Spacy's 'en_core_web_trf' package for advanced natural language processing. The application categorizes grocery items and quantifies them, displayed on a user-friendly interface built with React.js. The backend, powered by FastAPI, leverages the combined strengths of BERT and Spacy for real-time, accurate processing.
## Features
- **Item Categorization**: Utilizes a BERT classification model integrated with Spacy to accurately categorize grocery items.
- **Quantity Detection**: Automatically detects and lists the quantity for each item.
- **Interactive Web Interface**: Built with React.js for a responsive and intuitive user experience.
- **FastAPI Backend**: Robust and fast backend API using FastAPI, connecting the frontend with the BERT+Spacy model.
- **CRUD Operations**: Features include adding, subtracting, deleting items, and a 'Delete All' option for list management.
- **Copy List Functionality**: Allows users to copy the entire list with a single click.

## How It Works
- **Input Processing**: Users enter grocery items in natural language.
- **BERT + Spacy Model**: The backend processes this input, categorizing items and quantifying them using the combined power of BERT and Spacy.
- **Display & Interaction**: The categorized and quantified list is displayed on the React.js frontend, where users can perform various list management operations.

## Installation and Setup
1. Install React.js and FastAPI libraries
2. Download the Model Weights here [Model Weights](https://drive.google.com/file/d/1ZDsUpipr9aMsl-wc55LF_IoJsiVdN3Hh/view?usp=sharing)
3. Place the "model-best" folder on the same folder as the main.py of the FastAPI
4. Run the FastAPI
5. Run the React.js website and open http://localhost:3000/?

## Usage
- Add an item by typing its name and quantity (optional), then press enter
- Click copy all to copy the catergorized list
- Click delete all to delete all the list items

## Example of App Running
![Screenshot 2024-01-14 at 6 00 52 PM](https://github.com/1dscientist/Grocery-List-AI-App/assets/58582408/92f46f10-9df2-4e3e-8743-402c37bc3abb)
