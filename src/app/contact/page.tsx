'use client';

import ContentSection from '../components/ContentSection';

export default function ContactPage() {
  return (
    <ContentSection title="Contact Me" className="max-w-md mx-auto">
      <form className="w-full space-y-4">
        <div>
          <label htmlFor="name" className="block text-foreground text-lg font-medium mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 rounded-md bg-white/10 text-foreground border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-foreground text-lg font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded-md bg-white/10 text-foreground border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-foreground text-lg font-medium mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full p-3 rounded-md bg-white/10 text-foreground border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-md font-bold hover:bg-primary/80 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </ContentSection>
  );
}
