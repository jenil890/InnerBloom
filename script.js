/**
 * InnerBloom — Student Mental Health & Wellness Blog
 * Simple Vanilla JavaScript for College Minor Project
 */

// ==========================================================================
// 1. Blog Articles Data (Realistic & Helpful Student Wellness Articles)
// ==========================================================================
const blogArticles = [
  {
    id: 1,
    title: "Dealing with Exam Stress & Academic Pressure",
    category: "Mental Health",
    date: "October 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=700&q=80",
    excerpt: "Exam weeks can feel overwhelming. Here are four practical, realistic ways to keep your anxiety in check and protect your mental wellbeing during tests.",
    content: `
      <p>Exam season often brings intense pressure, late-night study sessions, and anxiety. While a little stress can help you stay alert, too much stress harms your concentration and health.</p>
      
      <h3>1. Break Your Syllabus into Small Goals</h3>
      <p>Instead of trying to revise three full chapters in one evening, set a goal to complete two specific topics. Completing small goals gives a sense of progress and keeps anxiety low.</p>

      <h3>2. The 50/10 Study Rule</h3>
      <p>Study with full focus for 50 minutes, then take a mandatory 10-minute break away from your desk. Stand up, drink water, or look outside. This refreshes your brain and prevents burnout.</p>

      <h3>3. Don't Compare Your Preparation with Friends</h3>
      <p>Everyone learns at their own pace. Constantly asking classmates how much they have finished only creates unnecessary panic. Focus entirely on your own preparation.</p>

      <h3>4. Talk to Someone When Overwhelmed</h3>
      <p>If you feel stuck or panicked, talk to a friend, family member, or college counselor. Simply sharing what you are experiencing releases built-up mental tension.</p>

      <div class="article-quote">
        “Your grades do not define your worth. Do your honest best and take care of your health first.”
      </div>
    `
  },
  {
    id: 2,
    title: "5 Small Self-Care Habits for Busy Students",
    category: "Self Care",
    date: "October 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
    excerpt: "Self-care doesn't require expensive routines. Simple daily micro-habits can boost your energy and keep you refreshed throughout college days.",
    content: `
      <p>Many students think self-care takes hours of free time. In reality, self-care is about small, consistent choices that support your physical and emotional health.</p>

      <h3>1. Drink a Full Glass of Water Every Morning</h3>
      <p>After 7-8 hours of sleep, your body is dehydrated. Drinking water right after waking up helps wake up your metabolism and clears brain fog.</p>

      <h3>2. Step Outside for 10 Minutes of Sunlight</h3>
      <p>Natural morning light resets your circadian rhythm, boosts your mood, and improves your sleep quality at night.</p>

      <h3>3. Keep Your Study Desk Tidy</h3>
      <p>A cluttered workspace often creates a cluttered mind. Spend just 2 minutes at the end of every day organizing your notes and desk.</p>

      <h3>4. Have Meals on Time</h3>
      <p>Skipping breakfast or delaying lunch leads to energy crashes and irritability. Keep simple snacks like nuts, fruit, or biscuits handy.</p>

      <h3>5. Take a Real Break Without Your Phone</h3>
      <p>Scrolling social media is not resting your brain. Close your eyes for 5 minutes or listen to calm instrumental music instead.</p>
    `
  },
  {
    id: 3,
    title: "How to Stop Procrastinating on Assignments",
    category: "Productivity",
    date: "September 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=700&q=80",
    excerpt: "Procrastination usually happens when a task feels too big or boring. Learn the 5-minute rule to get started without feeling overwhelmed.",
    content: `
      <p>We often postpone assignments not because we are lazy, but because we fear doing it poorly or don't know where to begin.</p>

      <h3>1. Use the 5-Minute Rule</h3>
      <p>Tell yourself: <em>'I will work on this assignment for only 5 minutes. If I still hate it, I can stop.'</em> Starting is the hardest part. Once you begin writing, momentum usually keeps you going.</p>

      <h3>2. Write a Messy First Draft</h3>
      <p>Perfectionism leads to procrastination. Allow your first draft to be rough. You can always edit and improve it later.</p>

      <h3>3. Put Your Phone in Another Room</h3>
      <p>Out of sight, out of mind. Turning on 'Do Not Disturb' or placing your phone away from your desk eliminates the temptation to check notifications every few minutes.</p>

      <div class="article-quote">
        “You don't have to feel ready to begin. Action creates motivation.”
      </div>
    `
  },
  {
    id: 4,
    title: "Staying Motivated When You Feel Stuck",
    category: "Motivation",
    date: "September 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=80",
    excerpt: "Motivation naturally goes up and down. Here is how to rely on simple daily routines and small wins when your motivation dips.",
    content: `
      <p>It is completely normal to lose motivation during long semesters. Motivation is an emotion, so expecting to feel motivated every single day is unrealistic.</p>

      <h3>1. Focus on Small Daily Wins</h3>
      <p>Write down just 2 or 3 priority tasks for each day. Ticking them off gives you a sense of achievement and builds positive momentum.</p>

      <h3>2. Remember Why You Started</h3>
      <p>Remind yourself of your long-term goals—whether it is gaining new skills, graduating, or making your family proud. Keep that purpose in mind.</p>

      <h3>3. Be Kind to Yourself on Low-Energy Days</h3>
      <p>On tough days, it is okay to do slightly less. Doing 20% is still better than doing 0%. Consistency over time is what counts.</p>
    `
  },
  {
    id: 5,
    title: "Mindfulness and Deep Breathing for Beginners",
    category: "Mindfulness",
    date: "September 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80",
    excerpt: "You don't need hours of meditation. Learn simple 2-minute breathing and grounding exercises you can do anywhere to calm your mind.",
    content: `
      <p>Mindfulness simply means bringing your attention back to the present moment rather than worrying about the future or replaying the past.</p>

      <h3>1. The 4-4-4 Box Breathing Technique</h3>
      <ul>
        <li>Inhale slowly through your nose for 4 counts.</li>
        <li>Hold your breath gently for 4 counts.</li>
        <li>Exhale slowly through your mouth for 4 counts.</li>
        <li>Repeat this 3 times whenever you feel nervous before a presentation or exam.</li>
      </ul>

      <h3>2. The 5-4-3-2-1 Grounding Method</h3>
      <p>When your thoughts are racing, pause and identify:</p>
      <ul>
        <li>5 things you can see around you</li>
        <li>4 things you can physically touch</li>
        <li>3 sounds you can hear</li>
        <li>2 scents you can smell</li>
        <li>1 positive thing about yourself</li>
      </ul>
      <p>This quick exercise immediately brings your mind back to reality.</p>
    `
  },
  {
    id: 6,
    title: "Why Quality Sleep is Essential for Mental Health",
    category: "Mental Health",
    date: "September 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=700&q=80",
    excerpt: "Pulling all-nighters often does more harm than good. Discover why consistent sleep improves memory, focus, and emotional balance.",
    content: `
      <p>During college, sleep is often the first thing students sacrifice. However, scientific research shows that sleep is when your brain organizes information and clears toxins.</p>

      <h3>1. Sleep Directly Affects Memory Retention</h3>
      <p>When you sleep, your brain consolidates what you studied during the day. Studying for 6 hours with 7 hours of sleep yields much better results than studying all night on 2 hours of sleep.</p>

      <h3>2. Avoid Screens 30 Minutes Before Bed</h3>
      <p>The blue light from smartphones suppresses melatonin (the sleep hormone), tricking your brain into thinking it is daytime. Read a book or listen to calming audio before sleeping.</p>

      <h3>3. Keep a Regular Sleep Schedule</h3>
      <p>Going to bed and waking up around the same time each day trains your body clock and makes waking up much easier.</p>
    `
  },
  {
    id: 7,
    title: "Setting Healthy Screen Time Boundaries",
    category: "Self Care",
    date: "August 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=700&q=80",
    excerpt: "Endless scrolling can lead to comparison and mental fatigue. Learn practical tips to use your phone mindfully without getting sucked in.",
    content: `
      <p>Smartphones are essential for college work and communication, but mindless doomscrolling drains hours of precious time and increases anxiety.</p>

      <h3>1. Turn Off Non-Essential Notifications</h3>
      <p>Mute notifications from shopping and social media apps. Only keep calls and important study group messages active.</p>

      <h3>2. Create Phone-Free Zones</h3>
      <p>Make your study desk and dining table phone-free areas. This helps you focus on studying and enjoy your meals mindfully.</p>

      <h3>3. Track Your Daily Screen Time</h3>
      <p>Check your built-in digital wellbeing settings. Seeing the actual hours spent on specific apps is a powerful motivator to set daily limits.</p>
    `
  },
  {
    id: 8,
    title: "Overcoming Self-Doubt and Building Confidence",
    category: "Motivation",
    date: "August 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=700&q=80",
    excerpt: "Many students struggle with impostor syndrome. Learn how shifting your perspective can help you build genuine self-confidence.",
    content: `
      <p>Feeling like you don't belong or aren't smart enough is something almost every student faces at some point. It is known as impostor syndrome.</p>

      <h3>1. Treat Mistakes as Learning Opportunities</h3>
      <p>Making a mistake in an exam or project does not mean you are a failure. It simply shows where you can improve next time.</p>

      <h3>2. Keep a 'Wins & Compliments' Note</h3>
      <p>Save positive feedback from professors, good grades, or kind messages from friends in a note on your phone. Revisit it whenever you feel self-doubt.</p>

      <h3>3. Avoid Social Media Comparison</h3>
      <p>People only post their best moments and achievements online. Comparing your everyday struggles to someone else's highlight reel is unfair to yourself.</p>
    `
  }
];

// ==========================================================================
// 2. Application Logic & Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Check if page has a locked category attribute (e.g. data-category="Mental Health")
  const pageCategory = document.body.getAttribute("data-category") || "all";
  let currentFilter = pageCategory;
  let searchQuery = "";

  const blogsGrid = document.getElementById("blogsGrid");
  const searchInput = document.getElementById("searchInput");
  const searchForm = document.getElementById("searchForm");
  const filterPills = document.querySelectorAll(".filter-pill");
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");

  // Modal elements
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalBody = document.getElementById("modalBody");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  // Render articles in the grid
  function renderArticles() {
    if (!blogsGrid) return;

    const filtered = blogArticles.filter(article => {
      // Category filter match
      const matchesCategory = (currentFilter === "all") || 
        (article.category.toLowerCase() === currentFilter.toLowerCase());

      // Search query match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = query === "" ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      blogsGrid.innerHTML = `
        <div class="no-results">
          <h3>No articles found</h3>
          <p>We couldn't find any articles matching your search. Try different keywords or reset your filter.</p>
        </div>
      `;
      return;
    }

    blogsGrid.innerHTML = filtered.map(article => `
      <article class="blog-card">
        <div class="blog-card-media">
          <img src="${article.image}" alt="${article.title}" loading="lazy" />
          <span class="card-category-badge">${article.category}</span>
        </div>
        <div class="blog-card-body">
          <div class="blog-meta">
            <span>${article.date}</span>
            <span>&bull;</span>
            <span>${article.readTime}</span>
          </div>
          <h3 class="blog-card-title">${article.title}</h3>
          <p class="blog-card-desc">${article.excerpt}</p>
          <div class="blog-card-footer">
            <button type="button" class="read-btn" data-id="${article.id}">
              Read Article &rarr;
            </button>
            <span class="read-time-tag">${article.readTime}</span>
          </div>
        </div>
      </article>
    `).join("");

    // Attach click events to "Read Article" buttons
    const readBtns = blogsGrid.querySelectorAll(".read-btn");
    readBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.getAttribute("data-id"), 10);
        openModal(id);
      });
    });
  }

  // Initial render
  renderArticles();

  // Search Form handling
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderArticles();
    });
  }

  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (searchInput) searchQuery = searchInput.value;
      renderArticles();
    });
  }

  // Category filter button handling
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.getAttribute("data-filter");
      renderArticles();
    });
  });

  // Mobile navigation menu toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // ========================================================================
  // 3. Article Modal Reader
  // ========================================================================
  function openModal(articleId) {
    const article = blogArticles.find(a => a.id === articleId);
    if (!article || !modalBackdrop || !modalBody) return;

    modalBody.innerHTML = `
      <span class="modal-category-tag">${article.category}</span>
      <h2 class="modal-article-title">${article.title}</h2>
      <div class="modal-article-meta">
        <span>By <strong>InnerBloom Editorial Team</strong></span> &bull; 
        <span>${article.date}</span> &bull; 
        <span>${article.readTime}</span>
      </div>
      <img src="${article.image}" alt="${article.title}" class="modal-article-img" />
      <div class="modal-text">
        ${article.content}
      </div>
    `;

    modalBackdrop.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.style.display = "none";
    document.body.style.overflow = "auto";
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop && modalBackdrop.style.display === "flex") {
      closeModal();
    }
  });

  // ========================================================================
  // 4. Contact Form Validation
  // ========================================================================
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const subjectInput = document.getElementById("subject");
      const messageInput = document.getElementById("message");
      const successAlert = document.getElementById("successAlert");

      let isValid = true;

      // Name validation
      if (!nameInput.value.trim()) {
        document.getElementById("nameError").textContent = "Please enter your name.";
        isValid = false;
      } else {
        document.getElementById("nameError").textContent = "";
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        document.getElementById("emailError").textContent = "Please enter your email address.";
        isValid = false;
      } else if (!emailPattern.test(emailInput.value.trim())) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
      } else {
        document.getElementById("emailError").textContent = "";
      }

      // Subject validation
      if (!subjectInput.value.trim()) {
        document.getElementById("subjectError").textContent = "Please provide a subject.";
        isValid = false;
      } else {
        document.getElementById("subjectError").textContent = "";
      }

      // Message validation
      if (!messageInput.value.trim()) {
        document.getElementById("messageError").textContent = "Please write your message.";
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        document.getElementById("messageError").textContent = "Message must be at least 10 characters long.";
        isValid = false;
      } else {
        document.getElementById("messageError").textContent = "";
      }

      if (isValid) {
        if (successAlert) {
          successAlert.style.display = "block";
          successAlert.textContent = "Thank you! Your message has been sent successfully. We will get back to you soon.";
        }
        contactForm.reset();
        setTimeout(() => {
          if (successAlert) successAlert.style.display = "none";
        }, 5000);
      }
    });

    // Clear error on typing
    ["name", "email", "subject", "message"].forEach(fieldId => {
      const input = document.getElementById(fieldId);
      if (input) {
        input.addEventListener("input", () => {
          const err = document.getElementById(fieldId + "Error");
          if (err) err.textContent = "";
        });
      }
    });
  }
});
