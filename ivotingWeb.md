

### 💡 **System Overview**

A **school voting platform** where:

* Students vote using their phone number after OTP verification (SMS + Email).
* Voter eligibility is based on a pre-uploaded class list (name, class, student ID, phone).
* Admins manage voting sessions and results.
* System ensures voter anonymity and gives election insights.

---

### 🔐 **User Flow – Student**

1. **Registration (indirect)**

   * No self-registration.
   * Admin uploads class list (CSV/Excel) using a downloadable template.
   * Format: `Name, Class, ID Number, Phone Number, Email`.

2. **Login to Vote**

   * Enter phone number.
   * Receive OTP via SMS and email.
   * Input OTP to verify.

3. **Voting Interface**

   * View 3 sections (e.g., President, Secretary, Organizer).
   * Each section appears as a card with candidate image + name.
   * Select one candidate per section.
   * Confirm and submit votes (only once).

4. **After Voting**

   * Thank you screen with message: "Your vote has been submitted anonymously."
   * When results are released, student sees:

     * Winners
     * Vote breakdown per candidate
     * Turnout statistics (but **not** who voted)

---

### 🛠️ **Admin/Electoral Commission Panel**

1. **Upload Class List**

   * Downloadable template.
   * Upload bulk voter data (CSV).
   * Validate entries (phone number format, duplicates, etc).

2. **Manage Voting**

   * Create and name voting sections.
   * Add candidates (name + photo + section).
   * Start / Pause / End voting session.
   * Cannot be voted on until “Started.”

3. **Monitor Results (Real-Time)**

   * Live count per section and candidate.
   * Total registered voters.
   * Total votes cast (turnout %).
   * Votes per class or faculty (optional drill-down).

4. **Result Release**

   * Option: Mark results as approved → Send results via:

     * SMS
     * Email
     * Visible in app/web

5. **Privacy & Security**

   * Voter ID is never linked to vote cast.
   * OTP logs and vote logs are stored securely.
   * Admin cannot trace individual votes.

---

### 📊 **System Insights**

* Total registered voters
* Voter turnout percentage
* Section-wise participation
* Number of invalid/incomplete votes (if applicable)
* Export analytics

---

### 📦 **Tech Stack Recommendation**

* **Frontend (Students & Admin):**

  * React / Vue / Flutter Web or Mobile (clean UI for cards)
* **Backend:**

  * Node.js (Express) or Django
* **DB:**

  * PostgreSQL (voters, votes, sections, results)
* **Authentication:**

  * Twilio (SMS OTP) + SendGrid or Mailgun (Email OTP)
* **File Upload/Processing:**

  * Multer (Node.js) / Django Import-Export
* **Security:**

  * AES encryption for data at rest
  * OTP token TTL & rate limiting

---

### 📝 **Optional Enhancements**

* Restrict login by IP or location (to prevent external interference)
* Allow pre-voting simulation (mock voting to test interface)
* Notify Admin when >X failed OTPs occur from one number (security flag)

