# Blog CLI

This repository contains a simple command-line interface (CLI) for managing blog posts.

# Features:

  **Create new blog posts:** Add new blog posts with titles and content.
  **List existing blog posts:** View a list of all created blog posts.
  **Edit existing blog posts:** Modify the title and content of existing posts.
  **Delete existing blog posts:** Remove unwanted blog posts.
  **View blog post:** Access additional blog posts directly from the CLI 

**Usage:**

1. **Install dependencies:**

   ```bash
   npm install prompt-sync

2.  **Run the CLI:**

node blog_cli.js

`Understanding JavaScript's Variable Declarations (let, const, var)`

This repository provides a basic understanding of JavaScript's variable declarations: `let`, `const`, and `var`.

For a more in-depth explanation, please refer to my Medium article in the CLI Section 6

**Key Points:**

* **let:** 
    * Block-scoped.
    * Can be reassigned.
    * Example: 
        `javascript
      let x = 10;
      x = 20; // Reassignment allowed
      `

* **const:** 
    * Block-scoped.
    * Cannot be reassigned or redeclared.
    * Must be initialized with a value.
    * Example: 
        `javascript
      const PI = 3.14159; 
     `

* **var:** 
    * Function-scoped.
    * Can be re-declared and reassigned.
    * Example: 
        `javascript
      function myFunction() {
        var x = 5;
        var x = 10; // Re-declaration allowed
      }
      `

**Note:**

* `let` and `const` are generally preferred over `var` in modern JavaScript due to their improved scoping behavior.

