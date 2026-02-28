import React, { useRef, useEffect, useState } from "react"
import emailjs from "@emailjs/browser"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Pricing = () => {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const containerRef = useRef(null)

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  })

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("vp4A1mkRc--H2B3Kw")
  }, [])

  // Validation - only email validation
  const validateField = (name, value) => {
    if (name === "from_email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!value.trim()) return "Email is required"
      if (!emailRegex.test(value)) return "Invalid email"
    }
    return ""
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    )
  }, [])

  const sendEmail = async (e) => {
    e.preventDefault()

    // Only validate email
    const emailError = validateField("from_email", formData.from_email)
    if (emailError) {
      setErrors({ from_email: emailError })
      setTouched({ from_email: true })
      return
    }

    // All fields must have some content
    if (!formData.from_name.trim() || !formData.from_email.trim() || !formData.message.trim()) {
      return
    }

    setLoading(true)
    setStatus(null)

    try {
      const result = await emailjs.send(
        "service_sns0ovl",
        "template_n12jiud",
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          to_email: "ayushsrivastava03004@gmail.com"
        }
      )

      if (result.status === 200) {
        setStatus({ type: "success", message: "Message sent successfully! We'll get back to you soon." })
        setFormData({ from_name: "", from_email: "", message: "" })
        setTouched({})
        setErrors({})

        setTimeout(() => setStatus(null), 5000)
      }
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatus({ 
        type: "error", 
        message: error.text || "Failed to send message. Please check your internet and try again." 
      })
    } finally {
      setLoading(false)
    }
  }

  // Button enabled when: all fields filled + valid email + not loading
  const allFieldsFilled = formData.from_name.trim() && formData.from_email.trim() && formData.message.trim()
  const emailValid = !errors.from_email && formData.from_email.trim()
  const isFormValid = allFieldsFilled && emailValid && !loading

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-[70vh] flex justify-center items-center bg-[#0A0A0B]"
    >
      <div className="w-[95%] max-w-6xl mt-16 md:mt-0 flex flex-col md:flex-row gap-12">
        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          {/* HEADING */}
          <h1 className="text-primary font-main font-black text-[clamp(2rem,10vw,5vw)] leading-[0.9]">
            Let
            <br />
            Us Talk
          </h1>

          {/* SUBTEXT */}
          <p className="max-w-md text-white/60 text-base leading-relaxed">
            Have an idea, a project, or a problem worth solving?
            Drop a message and let's discuss how we can build something meaningful.
          </p>

          {/* CONTACT LINKS */}
          <div className="flex flex-col gap-4 text-sm">
            {/* EMAIL */}
            <a
              href="mailto:ayushsrivastava03004@gmail.com"
              className="flex items-center gap-3 text-white/70 hover:text-white transition"
            >
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              ayushsrivastava03004@gmail.com
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/ayush-srivastava1403/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 hover:text-white transition"
            >
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              https://www.linkedin.com/in/ayush-srivastava1403/
            </a>
          </div>
        </div>

        {/* GLASS FORM */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div ref={containerRef} className="relative w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 overflow-hidden">
            {/* MORPH BLOBS */}
            <div className="absolute w-40 h-40 bg-accent blur-[120px] top-10 right-10" />
            <div className="absolute w-32 h-32 bg-accent blur-[120px] bottom-10 left-10" />

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="relative z-10 flex flex-col gap-5"
            >
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-white/60 uppercase tracking-wide">
                  Full Name
                </label>
                <div className="relative group">
                  <input
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-white/5 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-all duration-200 focus:border-white/40 focus:bg-white/10"
                  />
                  {formData.from_name && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400 font-bold text-lg">
                      ✓
                    </div>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-white/60 uppercase tracking-wide">
                  Email Address
                </label>
                <div className="relative group">
                  <input
                    name="from_email"
                    type="email"
                    value={formData.from_email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="your@email.com"
                    className={`w-full bg-white/5 backdrop-blur-sm border rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-all duration-200 ${
                      touched.from_email && errors.from_email
                        ? "border-red-500/60 focus:border-red-500/80 focus:bg-red-500/5"
                        : "border-white/15 focus:border-white/40 focus:bg-white/10"
                    }`}
                  />
                  {!errors.from_email && formData.from_email && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400 font-bold text-lg">
                      ✓
                    </div>
                  )}
                </div>
                {touched.from_email && errors.from_email && (
                  <p className="text-xs text-red-400 mt-1">{errors.from_email}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-white/60 uppercase tracking-wide">
                  Message
                </label>
                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-all duration-200 resize-none focus:border-white/40 focus:bg-white/10"
                  />
                  {formData.message && (
                    <div className="absolute right-4 top-4 text-green-400 font-bold text-lg">
                      ✓
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`mt-4 py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  isFormValid
                    ? "bg-accent text-black hover:scale-[1.02] active:scale-95 shadow-lg shadow-accent/30 cursor-pointer"
                    : "bg-accent/40 text-black/50 cursor-not-allowed"
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="text-lg">→</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status && (
                <div
                  className={`p-3 rounded-xl text-sm font-medium transition-all duration-200 animate-in fade-in ${
                    status.type === "success"
                      ? "bg-green-500/15 border border-green-500/30 text-green-400"
                      : "bg-red-500/15 border border-red-500/30 text-red-400"
                  }`}
                >
                  {status.type === "success" ? "✓" : "✕"} {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing