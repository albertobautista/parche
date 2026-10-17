const ITEMS = [
  {
    title: "One of a kind upcycled pieces",
    body: "Every Parché Studio piece is upcycled and made once, by hand, from garments with a past. It is a key piece for women who want something no one else will be wearing, and a choice made with conscience.",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="4.5" y="4.5" width="15" height="15" />
        <path d="M7.5 7.5h9v9h-9z" strokeDasharray="2 1.6" />
      </svg>
    ),
  },
  {
    title: "Shipping",
    body: "Each piece is wrapped by hand and sent with tracking as soon as it is ready. You will receive your tracking code the moment it leaves the studio.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M2.5 6.5h11v9h-11zM13.5 9.5h4l3 3v3h-7" />
        <circle cx="6.5" cy="17" r="1.6" />
        <circle cx="17" cy="17" r="1.6" />
      </svg>
    ),
  },
  {
    title: "Payments",
    body: "A choice of secure payment methods, so you can reserve with complete confidence. Full details are shared when your piece is ready.",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="5" y="10.5" width="14" height="10" rx="1" />
        <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5M12 14.5v2.5" />
      </svg>
    ),
  },
  {
    title: "Customer service",
    body: "A question about a piece, its fit or its story? Write to us and we will answer personally.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M9.6 9.5a2.5 2.5 0 1 1 3.4 2.3c-.6.3-1 .8-1 1.5v.6M12 17.2v.3" />
      </svg>
    ),
  },
];

export default function Faq() {
  return (
    <section className="faq" aria-label="Information">
      <div className="wrap faq-in">
        {ITEMS.map((item, i) => (
          <details className="faq-item" key={item.title} open={i === 0}>
            <summary>
              <span className="faq-ic" aria-hidden="true">{item.icon}</span>
              <span className="faq-t">{item.title}</span>
              <span className="faq-chev" aria-hidden="true"></span>
            </summary>
            <p>{item.body}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
