/**
 * EnquiryForm.tsx
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

export default function EnquiryForm() {
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
    } else if (
      isNaN(Number(formData.guestCount)) ||
      Number(formData.guestCount) < 1
    ) {
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
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsLoading(false);
    setIsSuccess(true);

    setFormData({
      name: "",
      email: "",
      eventType: "",
      guestCount: "",
      eventDate: "",
      notes: "",
    });

    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  return (
    <section className="section-tight">
      <div className="wrap form-shell">
        {isSuccess && (
          <div className="notice" style={{ marginBottom: "1.5rem" }}>
            <h3 className="display">Thank you!</h3>
            <p className="small">
              Your enquiry has been received. Our team will be in touch soon.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name" className="form-label">
              Full name *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Maria-Antonia"
              className="form-input"
              disabled={isLoading}
            />
            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="hello@example.com"
              className="form-input"
              disabled={isLoading}
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="eventType" className="form-label">
              Event type *
            </label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="form-select"
              disabled={isLoading}
            >
              <option value="">— Select one —</option>
              <option value="wedding">Wedding</option>
              <option value="brand-event">Brand Event</option>
              <option value="private-dining">Private Dining</option>
              <option value="other">Other</option>
            </select>
            {errors.eventType && (
              <p className="form-error">{errors.eventType}</p>
            )}
          </div>

          <div className="form-row-2">
            <div className="form-field">
              <label htmlFor="guestCount" className="form-label">
                Guest count *
              </label>
              <input
                id="guestCount"
                type="number"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                placeholder="120"
                className="form-input"
                disabled={isLoading}
              />
              {errors.guestCount && (
                <p className="form-error">{errors.guestCount}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="eventDate" className="form-label">
                Event date *
              </label>
              <input
                id="eventDate"
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="form-input"
                disabled={isLoading}
              />
              {errors.eventDate && (
                <p className="form-error">{errors.eventDate}</p>
              )}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="notes" className="form-label">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any specific requests or preferences"
              rows={5}
              className="form-textarea"
              disabled={isLoading}
            />
          </div>

          <div className="lineitems" style={{ marginBottom: "1.5rem" }}>
            <h4 className="lineitems-title">Enquiry details</h4>
            {formData.name && (
              <div className="sumline">
                <span>Contact</span>
                <span>{formData.name}</span>
              </div>
            )}
            {formData.email && (
              <div className="sumline">
                <span>Email</span>
                <span>{formData.email}</span>
              </div>
            )}
            {formData.eventType && (
              <div className="sumline">
                <span>Event type</span>
                <span className="capitalize">
                  {formData.eventType.replace("-", " ")}
                </span>
              </div>
            )}
            {formData.guestCount && (
              <div className="sumline">
                <span>Guests</span>
                <span>{formData.guestCount}</span>
              </div>
            )}
            {formData.eventDate && (
              <div className="sumline">
                <span>Date</span>
                <span>{new Date(formData.eventDate).toLocaleDateString()}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary btn-block"
          >
            {isLoading ? "Sending..." : "Send enquiry"}
          </button>

          <p className="small text-center" style={{ marginTop: "1.5rem" }}>
            MOCK / VISUAL PROTOTYPE ONLY. This form doesn&rsquo;t actually submit.
          </p>
        </form>
      </div>
    </section>
  );
}
