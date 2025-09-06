# Cal.com Setup Instructions for Autellia

## 🚀 Quick Setup Guide

### Step 1: Create Cal.com Account
1. Go to [cal.com](https://cal.com) and sign up (free plan available)
2. Choose username: `autellia` (or your preferred name)
3. Confirm your email address

### Step 2: Connect Your Calendar
1. Go to Settings → Connected Calendars
2. Connect Google Calendar or Outlook
3. Authorize Cal.com to read/write events

### Step 3: Create Demo Event Type
1. Dashboard → Event Types → **New Event Type**
2. Fill in details:
   - **Name**: "Demo Call" or "Book a Demo"
   - **Slug**: `demo` (creates `/demo` URL)
   - **Duration**: 30 minutes
   - **Location**: Zoom/Google Meet (or let user choose)
   - **Buffer**: 15 min before/after
   - **Minimum notice**: 2 hours
   - **Max bookings per day**: 5

3. **Event Questions** (collect info):
   - Company name
   - Phone number
   - What brings you to Autellia?

### Step 4: Get Your Booking URL
After creating the event, Cal.com will show your URL:
```
https://cal.com/autellia/demo
```
**Copy this exact URL!**

### Step 5: Update Website Code
Replace the URL in `Layout.jsx`:

```javascript
const calUrl = 'https://cal.com/YOUR_USERNAME/demo'; // Replace with your actual URL
```

### Step 6: Test Everything
1. Open your booking URL in incognito mode
2. Make a test booking
3. Check if calendar event is created
4. Verify confirmation email is sent

## 🎨 Branding Setup (Optional)
1. Settings → Appearance
2. Upload Autellia logo
3. Set brand color: `#6366f1` (matches your theme)
4. Customize booking page text

## 📧 Email & Reminders
1. Settings → Email Templates
2. Customize confirmation emails
3. Set up reminders: 24h and 1h before meeting

## 🔗 Integration Options

### Option A: Simple Redirect (Current)
```javascript
window.open('https://cal.com/autellia/demo', '_blank');
```

### Option B: Popup Widget (Better UX)
```html
<script src="https://cal.com/embed.js"></script>
<script>
Cal('open', { calLink: 'autellia/demo' });
</script>
```

### Option C: Inline Embed
```html
<iframe 
  src="https://cal.com/autellia/demo"
  width="100%" 
  height="700"
  frameborder="0">
</iframe>
```

## 🔧 Troubleshooting

### 404 Error on Booking Link
- Event type not created yet
- Wrong username/slug
- Use exact URL from Cal.com dashboard

### Calendar Not Syncing
- Reconnect calendar in Settings
- Check calendar permissions
- Verify timezone settings

### Popup Not Working
- Check if embed.js is loaded
- Browser popup blocker enabled
- Use redirect as fallback

## 📊 Analytics Setup
Track booking conversions:

```javascript
const handleBookDemo = () => {
  // Track click
  gtag('event', 'click_book_demo', {
    method: 'cal.com'
  });
  
  // Open Cal.com
  window.open('https://cal.com/autellia/demo', '_blank');
};
```

## 🎯 Next Steps
1. ✅ Create Cal.com account
2. ✅ Set up event type
3. ✅ Copy booking URL
4. ✅ Update website code
5. ✅ Test booking flow
6. ✅ Configure branding
7. ✅ Set up analytics

---

**Current Status**: Website is ready for Cal.com integration. Complete steps 1-4 above, then update the URL in `Layout.jsx` line 126.
