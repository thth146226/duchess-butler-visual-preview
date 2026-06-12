/**
 * src/components/enquiry/EnquiryMockForm.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Enquiry form with simulated validation, loading, success states
 */

"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  eventType: string;
  guestCount: string;
  eventDate: string;
  notes: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function EnquiryMockForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    eventType: "",
    guestCount: "",
    eventDate: "",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.eventType.trim()) {
      newErrors.eventType = "Event type is required";
    }
    if (!formData.guestCount.trim()) {
      newErrors.guestCount = "Guest count is required";
    } else if (isNaN(Number(formData.guestCount)) || Number(formData.guestCount) < 1) {
      newErrors.guestCount = "Guest count must be a positive number";
    }
    if (!formData.eventDate.trim()) {
      newErrors.eventDate = "Event date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsLoading(false);
    setIsSuccess(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      eventType: "",
      guestCount: "",
      eventDate: "",
      notes: "",
    });

    // Hide success message after 4 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid gap-clamp-7 md:gap-clamp-16">
          <div className="hero-copy fade">
            <span className="eyebrow block mb-5.5">Get in touch</span>
            <h1 className="display d-xl mb-6.5">Enquiry Form.</h1>
            <p className="lede mb-8.5">
              Tell us about your event. Our team will reach out within 24 hours
              with recommendations and availability.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap max-w-2xl mx-auto">
          {isSuccess && (
            <div className="notice border border-gold-soft bg-ivory p-6.5 mb-6.5">
              <h3 className="display text-lg mb-2">Thank you!</h3>
              <p className="small">
                Your enquiry has been received. Our team will be in touch soon.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="max-w-2xl">
            {/* Name */}
            <div className={`field mb-4.5 ${errors.name ? "err" : ""}`}>
              <label htmlFor="name" className="block text-sm letter-spacing-20 uppercase text-umber mb-1.75 font-500">
                Full name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Maria-Antonia"
                className="w-full bg-ivory border border-ink/25 px-3.5 py-3.25 font-sans text-95 text-ink focus:outline-2 focus:outline-gold focus:outline-offset-1 focus:border-gold"
                disabled={isLoading}
              />
              {errors.name && <p className="errmsg text-xs text-terra mt-1.25">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className={`field mb-4.5 ${errors.email ? "err" : ""}`}>
              <label htmlFor="email" className="block text-sm letter-spacing-20 uppercase text-umber mb-1.75 font-500">
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hello@example.com"
                className="w-full bg-ivory border border-ink/25 px-3.5 py-3.25 font-sans text-95 text-ink focus:outline-2 focus:outline-gold focus:outline-offset-1 focus:border-gold"
                disabled={isLoading}
              />
              {errors.email && <p className="errmsg text-xs text-terra mt-1.25">{errors.email}</p>}
            </div>

            {/* Event Type */}
            <div className={`field mb-4.5 ${errors.eventType ? "err" : ""}`}>
              <label htmlFor="eventType" className="block text-sm letter-spacing-20 uppercase text-umber mb-1.75 font-500">
                Event type *
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full bg-ivory border border-ink/25 px-3.5 py-3.25 font-sans text-95 text-ink focus:outline-2 focus:outline-gold focus:outline-offset-1 focus:border-gold"
                disabled={isLoading}
              >
                <option value="">— Select one —</option>
                <option value="wedding">Wedding</option>
                <option value="brand-event">Brand Event</option>
                <option value="private-dining">Private Dining</option>
                <option value="other">Other</option>
              </select>
              {errors.eventType && <p className="errmsg text-xs text-terra mt-1.25">{errors.eventType}</p>}
            </div>

            {/* Two-column layout for guest count and date */}
            <div className="f-2 gap-4.5 mb-4.5">
              {/* Guest Count */}
              <div className={`field ${errors.guestCount ? "err" : ""}`}>
                <label htmlFor="guestCount" className="block text-sm letter-spacing-20 uppercase text-umber mb-1.75 font-500">
                  Guest count *
                </label>
                <input
                  id="guestCount"
                  type="number"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  placeholder="120"
                  className="w-full bg-ivory border border-ink/25 px-3.5 py-3.25 font-sans text-95 text-ink focus:outline-2 focus:outline-gold focus:outline-offset-1 focus:border-gold"
                  disabled={isLoading}
                />
                {errors.guestCount && <p className="errmsg text-xs text-terra mt-1.25">{errors.guestCount}</p>}
              </div>

              {/* Event Date */}
              <div className={`field ${errors.eventDate ? "err" : ""}`}>
                <label htmlFor="eventDate" className="block text-sm letter-spacing-20 uppercase text-umber mb-1.75 font-500">
                  Event date *
                </label>
                <input
                  id="eventDate"
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full bg-ivory border border-ink/25 px-3.5 py-3.25 font-sans text-95 text-ink focus:outline-2 focus:outline-gold focus:outline-offset-1 focus:border-gold"
                  disabled={isLoading}
                />
                {errors.eventDate && <p className="errmsg text-xs text-terra mt-1.25">{errors.eventDate}</p>}
              </div>
            </div>

            {/* Notes */}
            <div className="field mb-6.5">
              <label htmlFor="notes" className="block text-sm letter-spacing-20 uppercase text-umber mb-1.75 font-500">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any specific requests or preferences&rsquo;"
                rows={5}
                className="w-full bg-ivory border border-ink/25 px-3.5 py-3.25 font-sans text-95 text-ink focus:outline-2 focus:outline-gold focus:outline-offset-1 focus:border-gold resize-none"
                disabled={isLoading}
              />
            </div>

            {/* Itemised summary */}
            <div className="lineitems border border-gold-soft bg-ivory p-5 mb-6.5">
              <h4 className="font-serif font-400 text-1.15rem mb-2.5">
                Enquiry details
              </h4>
              {formData.name && (
                <div className="sumline flex justify-between py-1.75 text-85">
                  <span className="q text-umber">Contact</span>
                  <span>{formData.name}</span>
                </div>
              )}
              {formData.email && (
                <div className="sumline flex justify-between py-1.75 text-85">
                  <span className="q text-umber">Email</span>
                  <span>{formData.email}</span>
                </div>
              )}
              {formData.eventType && (
                <div className="sumline flex justify-between py-1.75 text-85">
                  <span className="q text-umber">Event type</span>
                  <span className="capitalize">{formData.eventType.replace("-", " ")}</span>
                </div>
              )}
              {formData.guestCount && (
                <div className="sumline flex justify-between py-1.75 text-85">
                  <span className="q text-umber">Guests</span>
                  <span>{formData.guestCount}</span>
                </div>
              )}
              {formData.eventDate && (
                <div className="sumline flex justify-between py-1.75 text-85">
                  <span className="q text-umber">Date</span>
                  <span>{new Date(formData.eventDate).toLocaleDateString()}</span>
                </div>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn w-full text-center disabled:opacity-45 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <span className="spinner inline-block align-middle" />
                  Sending...
                </>
              ) : (
                "Send enquiry"
              )}
            </button>

            {/* Mock notice */}
            <p className="small text-center mt-6 text-umber">
              MOCK / VISUAL PROTOTYPE ONLY. This form doesn&rsquo;t actually submit.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
