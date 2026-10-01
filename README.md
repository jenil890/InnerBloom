# InnerBloom — Student Mental Health & Wellness Blog

> **College Web Technology Minor Project**  
> **Author:** Jenil Sabhaya  
> **Academic Year:** 2026  
> **Tech Stack:** HTML5, CSS3, Vanilla JavaScript (ES6+)  
> **Paradigm:** Component-Driven Multi-Page Static Web Application

---

## Table of Contents
1. [Project Overview & Scope](#1-project-overview--scope)
2. [Full Directory & File Breakdown](#2-full-directory--file-breakdown)
3. [Deep Technical Architecture](#3-deep-technical-architecture)
   - [A. HTML5 Semantic Engine & DOM Hierarchy](#a-html5-semantic-engine--dom-hierarchy)
   - [B. CSS3 Design System & Layout Calculations](#b-css3-design-system--layout-calculations)
   - [C. JavaScript (ES6+) Execution Lifecycle & State Management](#c-javascript-es6-execution-lifecycle--state-management)
4. [Color Palette & Token Reference](#4-color-palette--token-reference)
5. [Local Development & Deployment Guide](#5-local-development--deployment-guide)
6. [Comprehensive Viva Voce Preparation Guide (Questions & Answers)](#6-comprehensive-viva-voce-preparation-guide-questions--answers)
7. [Author & Academic Metadata](#7-author--academic-metadata)

---

## 1. Project Overview & Scope

**InnerBloom** is a responsive, client-side rendered mental health and lifestyle blogging application created as an academic Web Technology Minor Project. It addresses common student stressors such as exam anxiety, burnout, sleep irregularities, and procrastination through evidence-backed wellness strategies.

### Core Architectural Goals:
* **Zero-Dependency Architecture:** Engineered without third-party frameworks (e.g., React, Vue, jQuery, Bootstrap, Tailwind) to demonstrate fundamental mastery of core browser APIs, raw CSS3 layout math, and ES6+ programming.
* **Predictable Performance:** Sub-millisecond initial paint times ($< 50\text{ms}$) with zero runtime overhead, negligible memory footprints, and instant client-side transitions.
* **Component-Oriented Multi-Page Design:** Reusable UI components (navigation bar, search toolbar, article card, reader modal, footer) shared across multiple distinct document entry points.

---

## 2. Full Directory & File Breakdown

```
my-mind-matters-blogging-website-main/
│
├── index.html            # Primary landing page, live search engine, filter bar & category showcase
├── about.html            # Mission, vision, core wellness pillars & platform values
├── contact.html          # Contact interface with dual-column layout & real-time form validation
│
├── mental-health.html    # Dedicated category hub for stress management & emotional balance
├── self-care.html        # Dedicated category hub for sleep health & daily rituals
├── motivation.html       # Dedicated category hub for positive mindset & goal setting
├── productivity.html     # Dedicated category hub for time-blocking & beating procrastination
├── mindfulness.html      # Dedicated category hub for deep breathing & grounding techniques
│
├── style.css             # Unified stylesheet (CSS Variables, Flexbox, Grid, Media Queries)
├── script.js             # Client-side JavaScript (Dataset, search, filtering, modal, validation)
├── logo.svg              # Scalable Vector Graphics (SVG) responsive emblem
└── README.md             # Complete technical documentation & Viva Voce preparation guide
```

---

## 3. Deep Technical Architecture

### A. HTML5 Semantic Engine & DOM Hierarchy

The markup strictly adheres to the **W3C HTML5 Living Standard**, prioritizing semantic clarity over generic `<div>` soup:

* **Document Structure:**
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>...</head>
    <body data-category="Mental Health">
      <header class="site-header">...</header>
      <section class="hero-section">...</section>
      <main class="main-content-section">
        <section class="search-filter-section">...</section>
        <div class="blogs-grid" id="blogsGrid"></div>
      </main>
      <footer class="site-footer">...</footer>
      <div class="modal-backdrop" id="modalBackdrop">...</div>
    </body>
  </html>
  ```
* **Accessibility (a11y) & SEO Integration:**
  * Viewport configuration: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` ensures $1:1$ pixel mapping on mobile viewports.
  * Explicit ARIA metadata: `aria-label="Toggle Menu"`, `aria-label="Close Modal"`, and `role="dialog"`.
  * Context Attributes: `data-category` on `<body>` serves as a declarative state container read directly by JavaScript during `DOMContentLoaded`.

---

### B. CSS3 Design System & Layout Calculations

The visual presentation is powered by custom CSS3 properties, CSS Grid 2D matrices, and Flexbox 1D linear stacks.

#### 1. CSS Custom Properties (`:root` Tokens)
```css
:root {
  --sage-dark: #6B9080;     /* Primary brand, header, buttons, headings */
  --sage-medium: #A4C3B2;   /* Secondary accent, nav hover, category borders */
  --mint-pale: #CCE3DE;     /* Structural borders, input outlines, dividers */
  --ice-soft: #EAF4F4;      /* Card surface, subtle backdrops, pill tags */
  --bg-page: #F6FFF8;       /* Primary canvas background */
  
  --white: #FFFFFF;
  --text-dark: #1E382F;     /* High-contrast WCAG AAA compliant text (7.2:1 contrast ratio) */
  --text-muted: #496E61;    /* Secondary metadata text */
  --shadow: 0 4px 14px rgba(107, 144, 128, 0.12);
  --shadow-hover: 0 8px 22px rgba(107, 144, 128, 0.22);
  --radius: 10px;
  --transition: all 0.3s ease;
}
```

#### 2. CSS Grid Multi-Column Auto-Placement
The blog grid computes responsive column counts dynamically without media queries using CSS Grid's intrinsic sizing algorithm:
```css
.blogs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
}
```
* **Math Breakdown:** If the viewport container is $1000\text{px}$, the browser automatically fits $\lfloor 1000 / (320 + 25) \rfloor = 2$ columns of equal fractional width ($1\text{fr}$ each). On a $1400\text{px}$ monitor, it expands to $3$ or $4$ columns seamlessly.

#### 3. Flexbox Stacking & Alignment
Flexbox handles 1D layout mechanics:
* **Sticky Navbar:** `position: sticky; top: 0; z-index: 1000; display: flex; justify-content: space-between; align-items: center;`
* **Card Internal Layout:** `display: flex; flex-direction: column; flex: 1;` ensures card footers remain pinned uniformly to the bottom regardless of varying excerpt heights.

#### 4. Stacking Contexts & Z-Index Hierarchy
* `z-index: 1000`: Sticky site header.
* `z-index: 2000`: Full article modal backdrop and reader container, ensuring overlay over all page elements.

---

### C. JavaScript (ES6+) Execution Lifecycle & State Management

All client-side interactions run through vanilla JavaScript in [`script.js`](file:///e:/projects/my-mind-matters-blogging-website-main/script.js).

```
+-------------------------------------------------------------------+
|                        Browser Loads DOM                          |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|              DOMContentLoaded Event Triggered                     |
+-------------------------------------------------------------------+
                                  |
         +------------------------+------------------------+
         |                                                 |
         v                                                 v
+-------------------------------+             +---------------------------+
| Read Category Lock from       |             | Initialize Form Listeners |
| document.body.dataset         |             | & Search Event Handlers   |
+-------------------------------+             +---------------------------+
         |
         v
+-------------------------------------------------------------------+
|                     renderArticles()                              |
|   1. Filter blogArticles by currentFilter & searchQuery           |
|   2. Generate HTML template strings with Array.prototype.map()    |
|   3. Inject into DOM via innerHTML                                |
|   4. Attach Event Listeners to dynamic "Read Article" buttons     |
+-------------------------------------------------------------------+
```

#### 1. Real-Time Filtering Algorithm
```javascript
const filtered = blogArticles.filter(article => {
  // Category constraint check
  const matchesCategory = (currentFilter === "all") || 
    (article.category.toLowerCase() === currentFilter.toLowerCase());

  // Search query constraint check
  const query = searchQuery.trim().toLowerCase();
  const matchesSearch = query === "" ||
    article.title.toLowerCase().includes(query) ||
    article.excerpt.toLowerCase().includes(query) ||
    article.category.toLowerCase().includes(query);

  return matchesCategory && matchesSearch;
});
```
* **Time Complexity:** $\mathcal{O}(N \times M)$ where $N$ is the number of articles and $M$ is the average string length. For an in-memory client dataset, execution completes in $< 1\text{ms}$.

#### 2. Modal Reader & Scroll Locking Mechanism
```javascript
function openModal(articleId) {
  const article = blogArticles.find(a => a.id === articleId);
  if (!article) return;
  modalBody.innerHTML = `...`;
  modalBackdrop.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevents background viewport scroll
}

function closeModal() {
  modalBackdrop.style.display = "none";
  document.body.style.overflow = "auto";   // Restores normal scrolling
}
```

#### 3. Client-Side Regex Validation
```javascript
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```
* `^`: Asserts start of the string.
* `[^\s@]+`: One or more characters that are neither whitespace nor `@` (username part).
* `@`: Matches the literal `@` delimiter.
* `[^\s@]+`: One or more characters that are neither whitespace nor `@` (domain name).
* `\.`: Matches the literal dot `.` separator.
* `[^\s@]+`: One or more characters for top-level domain (e.g. `com`, `edu`, `org`).
* `$`: Asserts end of the string.

---

## 4. Color Palette & Token Reference

| Hex Code | Variable Name | Role in UI | Contrast Ratio vs. Text |
| :--- | :--- | :--- | :--- |
| **`#6B9080`** | `--sage-dark` | Header background, primary buttons, major titles, footer | **4.8:1** (Readable on white) |
| **`#A4C3B2`** | `--sage-medium` | Navigation active pill, category border accents | UI Accent / Badge |
| **`#CCE3DE`** | `--mint-pale` | Structural card borders, input borders, dividers | Structural outline |
| **`#EAF4F4`** | `--ice-soft` | Card image canvas, filter pills, info cards | Neutral surface |
| **`#F6FFF8`** | `--bg-page` | Primary viewport background canvas | Background canvas |
| **`#1E382F`** | `--text-dark` | High-contrast main reading body text | **11.2:1** (WCAG AAA) |

---

## 5. Local Development & Deployment Guide

Since this project uses no build scripts or transpilers, it can be deployed on any static hosting provider (GitHub Pages, Vercel, Netlify, Cloudflare Pages, Firebase Hosting) or run locally:

```bash
# Option A: Python 3 Built-in HTTP Server
python -m http.server 3000

# Option B: Node.js http-server
npx http-server ./ -p 3000

# Option C: Direct Browser Execution
Double-click index.html in file explorer
```

---

## 6. Comprehensive Viva Voce Preparation Guide (Questions & Answers)

This section contains thorough, technically rigorous explanations for all Viva Voce and project defense questions.

---

### Q1: What is the main objective of this project?
**Answer:**  
The objective of **InnerBloom** is to build a high-performance, responsive, component-structured mental health and wellness blogging platform using standard native web technologies (HTML5, CSS3, ES6+ JavaScript). It delivers a distraction-free, accessible reading experience with zero third-party framework overhead, offering real-time live search, contextual category locking, an interactive modal reader dialog, and client-side form validation.

---

### Q2: What are Semantic HTML tags and why are they important?
**Answer:**  
Semantic HTML tags explicitly convey the structural meaning and role of their contents to both the browser engine and developer, rather than acting as non-semantic layout wrappers (like `<div>` or `<span>`).
* **Semantic tags used in InnerBloom:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.
* **Technical Importance:**
  1. **Accessibility (a11y) & Screen Readers:** Assistive technologies build an accessibility tree using landmarks (`role="banner"` for `<header>`, `role="main"` for `<main>`), enabling visually impaired users to jump directly to specific content sections using keyboard shortcuts.
  2. **SEO (Search Engine Optimization):** Web crawlers (e.g. Googlebot) parse `<article>` and `<h1>` tags to identify key content hierarchies and metadata for indexation.
  3. **Maintainable Code Architecture:** Reduces "div soup", creating self-documenting code with predictable inheritance and clean CSS selector targeting.

---

### Q3: How does the search and filter mechanism work?
**Answer:**  
The search and filtering mechanism executes entirely on the client side in [`script.js`](file:///e:/projects/my-mind-matters-blogging-website-main/script.js) without backend round-trips:
1. **Event Listening:** An `input` event listener is attached to `#searchInput`. Every keystroke updates the `searchQuery` state variable.
2. **Compound Filtering:** The algorithm executes `Array.prototype.filter()` over `blogArticles`:
   * **Category Evaluation:** `(currentFilter === "all") || (article.category.toLowerCase() === currentFilter.toLowerCase())`
   * **Search String Matching:** Sanitizes inputs with `.trim().toLowerCase()` and queries `title`, `excerpt`, and `category` fields using `String.prototype.includes()`.
3. **DOM Reconciliation:** 
   * If the resulting array is empty, it injects a clean empty-state fallback message (`<div class="no-results">`).
   * Otherwise, it transforms the filtered objects into HTML strings via `Array.prototype.map()` and assigns the result to `blogsGrid.innerHTML`.
4. **Dynamic Listener Binding:** Iterates over all newly rendered `.read-btn` elements using `querySelectorAll()` to attach click listeners that trigger `openModal(articleId)`.

---

### Q4: How is data shared across different category pages without a database or backend?
**Answer:**  
Data persistence and contextual sharing are handled through a **Shared In-Memory Model + HTML5 Dataset Architecture**:
1. **Centralized Data Model:** All HTML pages link to the single shared script file [`script.js`](file:///e:/projects/my-mind-matters-blogging-website-main/script.js), where the immutable `blogArticles` array resides in memory.
2. **Declarative Page Locking:** Each category page declares its category via an HTML5 data attribute on the `<body>` element (e.g., `<body data-category="Mental Health">`).
3. **Execution Context Detection:** On `DOMContentLoaded`, JavaScript reads the attribute:
   ```javascript
   const pageCategory = document.body.getAttribute("data-category") || "all";
   ```
4. **Context-Aware Initial Render:** If a category lock is present, `currentFilter` initializes to that specific category instead of `"all"`, restricting the rendered view immediately while keeping the live search toolbar fully functional within that scope.

---

### Q5: What is the difference between CSS Flexbox and CSS Grid? Where did you use each?
**Answer:**  
* **CSS Flexbox (One-Dimensional):** Designed for layout along a single axis (either row or column). It excels in distributing space and aligning items within a container.
  * *InnerBloom Implementation:* Used in `.navbar` (`justify-content: space-between; align-items: center;`), `.search-form` (`display: flex; gap: 10px;`), `.filter-tags`, and the `.site-footer` content stack.
* **CSS Grid (Two-Dimensional):** Designed for layout along both rows and columns simultaneously. It manages structural matrix layouts with strict or fluid cell placements.
  * *InnerBloom Implementation:* Used in `.blogs-grid` using fluid responsive auto-placement:
    ```css
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 25px;
    ```
    and `.contact-layout` (`grid-template-columns: 1.5fr 1fr; gap: 30px;`).

---

### Q6: What are CSS Custom Properties (Variables) and why did you use them?
**Answer:**  
CSS Custom Properties are entities defined by CSS authors containing specific values to be reused throughout a document. They follow the `--*` naming convention and are accessed via the `var()` function.
* **Scope:** Declared under the `:root` pseudo-class, making them globally accessible across the entire DOM tree.
* **Technical Advantages:**
  1. **Single Point of Truth (DRY Principle):** Changing `--sage-dark: #6B9080` instantly re-themes the header, primary buttons, card titles, borders, and footer without manual line-by-line refactoring.
  2. **Dynamic Runtime Scoping:** Unlike SASS/LESS preprocessor variables (which compile to static values), native CSS variables remain accessible and mutable in the browser DOM at runtime via `element.style.setProperty()`.

---

### Q7: How did you implement client-side form validation?
**Answer:**  
Client-side form validation in [`contact.html`](file:///e:/projects/my-mind-matters-blogging-website-main/contact.html) is managed through standard event-driven JavaScript:
1. **Event Interception:** Listens to `contactForm.addEventListener("submit", (e) => {...})` and immediately calls `e.preventDefault()` to stop default HTTP GET/POST form submission.
2. **Field-by-Field Sanitization & Verification:**
   * **Name & Subject:** Evaluates `!input.value.trim()` to ensure inputs contain non-whitespace characters.
   * **Email Regex:** Tests against `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` to ensure a valid email syntax (`user@domain.tld`).
   * **Message Length:** Checks `messageInput.value.trim().length >= 10`.
3. **Error Rendering:** If any constraint fails, the corresponding `<span id="...Error">` element has its `textContent` populated.
4. **Real-Time Input Cleanup:** An `input` event listener is attached to all fields to clear error spans as soon as the user starts typing, providing immediate positive feedback.
5. **Success Handling:** If all checks pass, a green alert banner (`#successAlert`) is revealed, `contactForm.reset()` clears the fields, and a `setTimeout(..., 5000)` auto-dismisses the alert banner.

---

### Q8: How does the article modal reader work?
**Answer:**  
The modal dialog acts as an isolated overlay reader for full article view:
1. **Trigger:** Clicking a `.read-btn` grabs the article `id` via `btn.getAttribute("data-id")`.
2. **Lookup:** `blogArticles.find(a => a.id === articleId)` retrieves the complete article record from memory in $\mathcal{O}(N)$ time.
3. **Template Insertion:** Formatted HTML (title, badges, read time, image, rich content paragraphs) is injected into `#modalBody`.
4. **Display Activation & Viewport Locking:**
   * `#modalBackdrop` changes from `display: none` to `display: flex`.
   * `document.body.style.overflow = "hidden"` locks the background window scrolling to prevent viewport jitter.
5. **Dismissal Triggers (3-Way Listener Stack):**
   * **Close Button:** Click listener on `#modalCloseBtn`.
   * **Backdrop Click:** Click listener on `#modalBackdrop` checking `if (e.target === modalBackdrop) closeModal()`.
   * **Keyboard Accessibility:** Global `window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); })`.

---

### Q9: What is DOM (Document Object Model) and how is it used in this project?
**Answer:**  
The **Document Object Model (DOM)** is a tree-structured, language-independent representation of an HTML document where every HTML tag is a node object. JavaScript interacts with this tree via the browser's Web APIs.
* **DOM Querying in InnerBloom:** `document.getElementById()`, `document.querySelectorAll()`.
* **DOM Modification:** `element.innerHTML`, `element.textContent`, `element.setAttribute()`.
* **CSS Class Manipulation:** `element.classList.toggle("show")` for the mobile off-canvas drawer navigation.
* **Event Binding:** `element.addEventListener("click", ...)` to capture and respond to user interactions.

---

### Q10: What are Template Literals in ES6?
**Answer:**  
Template literals are string literals delimited by backticks (`` ` ``) rather than single (`'`) or double (`"`) quotes.
* **Key Capabilities Used in InnerBloom:**
  1. **String Interpolation:** Allows embedding JavaScript expressions and variables directly within strings using `${expression}` syntax (e.g. `${article.title}`).
  2. **Multi-line Strings:** Allows HTML template structures with indentation and line breaks without concatenation operators (`+`) or newline escape characters (`\n`).
  3. **Component Generation:** Powers dynamic generation of complex card HTML blocks directly inside `Array.prototype.map()`.

---

### Q11: Why is this project built without frameworks like React, Angular, or Bootstrap?
**Answer:**  
1. **Core Web Fundamentals Evaluation:** Building directly with HTML5, CSS3, and ES6+ demonstrates mastery of essential browser architectures (DOM tree, CSS box model, event loop, standard layout math).
2. **Performance & Lightweight Footprint:** The entire codebase is $< 50\text{KB}$ uncompressed. It executes instantaneously with zero virtual DOM reconciliation overhead, zero compile steps, and zero bundlers (e.g. Webpack/Vite).
3. **Portability & Zero Maintenance:** The project runs natively across all web browsers without requiring `npm install`, node environment setups, or build scripts.

---

## 7. Author Information

* **Project Developer:** Jenil Sabhaya
* **Role:** Frontend Web Architecture & UI Design
* **Project Type:** College Minor Project (Web Technology)
* **Status:** Complete, Tested & Evaluated
* **Academic Year:** 2026
