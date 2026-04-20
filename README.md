# 🍽️ Angular Recipe App – Functional Guide

## 🥘 1. Application Purpose
A simple recipe web application built with Angular.  
The app provides public browsing and authenticated features, allowing users to create, edit, and manage their own recipes.


## 👥 2. User Roles

### 👤 Guest (Not Authenticated User)
- View Home page (latest 4 recipes)
- Browse Catalog with all recipes
- View recipe details
- Register or login

### ✅ Authenticated User
- Create new recipes
- Edit own recipes
- Delete own recipes
- Add recipes to favorites


## ✨ 3. Public Features

### 👤 Guest
- **Home Page** – Displays the latest 4 added recipes
- **Catalog Page** – Displays all recipes
- **Authentication** – Registration & login
- **Recipe Details** – Dedicated page for each recipe

### ✅ Authenticated User
- Add new recipes
- Add recipes to favorites
- Edit own recipes
- Delete own recipes


## 🔄 4. Main Application Flow
1. User opens the Home page  
2. Navigates to the Catalog page  
3. Opens a recipe Details page  
4. Logs in or registers  
5. Creates a new recipe  
6. Recipe appears in Catalog  
7. Edits or deletes own recipe  
8. Adds recipe to Favorites  


## 🗂️ 5. Data Structure

### 🍲 Recipe
- id  
- createdOn  
- title  
- description  
- category  
- imageUrl  
- ingredients  
- cookTime  
- servings  
- difficulty  
- ownerId  

### ➕ Create Recipe
- createdOn  
- title  
- description  
- category  
- imageUrl  
- ingredients  
- cookTime  
- servings  
- difficulty  

### 👤 User
- id  
- email  
- recipes  
- created_at  
- accessToken  
- favorites  

### 🔔 Notification
- message  
- type  


## 🏗️ 6. Project Architecture

```bash
src/
 └── app/
     ├── core/
     │   ├── guards/
     │   └── services/
     ├── features/
     │   ├── auth/
     │   ├── favorites/
     │   ├── home/
     │   ├── not-found/
     │   ├── recipe-create/
     │   ├── recipe-details/
     │   ├── recipe-edit/
     │   ├── recipes-list/
     │   └── recipes-list-recent/
     ├── layout/
     │   ├── footer/
     │   └── header/
     └── shared/
         ├── components/
         ├── directives/
         ├── interfaces/
         ├── notification/
         └── validators/
```

## ⚙️ 7. Technologies Used
- Angular
- TypeScript
- REST API
- CSS
- Bootstrap

## 🚀 8. How to Run the Project

### 1. Clone the repository

### 2. Angular frontend
- Open in integrated terminal: `/recipes`
- npm install
- npm start

### 3. SoftUni Practice Server
- Open in integrated terminal: `/server`
- node server.js

### 4. Open the application
http://localhost:4200