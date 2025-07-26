# 🧪 Frontend Test Task – User Management

This task is a simple test of your frontend fundamentals. You’ll build a basic UI that lets users view, create, edit, and delete other users using a REST API.

You can use React/Nextjs.

---

## ✅ Features to Implement

### 1. User List Page

- Fetch users from `GET /users`
- Render them in a table or cards
- Add search/filter functionality
- Handle loading and error states

### 2. User Details Page

- Clicking a user should open a detail view
- Fetch from `GET /users/:id`
- Display name and email
- Include a **Back** button to return to the list

### 3. Add User

- “Add User” button → shows a form (name + email)
- Validate input before submitting
- On submit, send `POST /users`
- Show confirmation and reload the list

### 4. Edit User

- “Edit” option in list or details view
- Pre-filled form with existing data
- Submit updated data via `PUT /users/:id`
- Show success feedback and refresh data

### 5. Delete User

- Allow deleting a user from list or detail view
- Ask for confirmation before deleting
- On confirm, call `DELETE /users/:id`
- Remove the user from UI

---

## 📱 Responsiveness & Accessibility

- App should look good on both desktop and mobile
- Use semantic HTML, keyboard accessibility, and focus handling

---

## 🔁 User Flow

1. **User List**: Shows all users with options to Add, View, Edit, or Delete
2. **Add User**: Click “Add” → Fill form → Submit → See confirmation → Return to updated list
3. **View Details**: Click a name → Navigate to details → See user info → Go back
4. **Edit User**: Click “Edit” → Modify form → Submit → See confirmation
5. **Delete User**: Click “Delete” → Confirm → User removed

---

## ⚠️ Error & Empty States

- If something fails (e.g., fetch error), show a friendly error message
- If no users exist, show a helpful "no users" message

---

## 🎨 Styling Guide

Stick to these basic style rules to keep things consistent.

### Colors
- **Primary**: `#1976d2`
- **Secondary**: `#f5f5f5`
- **Text**: `#333`

### Typography
- Font: Arial, sans-serif
- Headings: Bold, 1.25× normal size

### Buttons
- Background: primary color
- Text: white
- Rounded corners: 5px

### Form Inputs
- Border: `1px solid #ccc`
- Padding: `8px`
- Radius: `5px`

### Layout
- Max width: 800px
- Centered container with 24px padding

---

## 💾 Sample CSS

```css
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  color: #333;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 40px auto;
  background: #fff;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

h1, h2 {
  color: #1976d2;
  margin-top: 0;
}

button {
  background: #1976d2;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
button:disabled {
  opacity: 0.6;
}

input, select, textarea {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 12px;
  width: 100%;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .container {
    padding: 12px;
  }
  h1, h2 {
    font-size: 1.1em;
  }
}
