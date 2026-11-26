import { useEffect, useState } from "react";
import "./JacketPotatoPuchong.css";
import { ScrollTilt } from "../components/ScrollTilt";
import {
  BIG_MAC_VARIANTS,
  COPY,
  LOCATION_URL,
  WHATSAPP_NUMBER,
  type Lang,
  type VariantOption,
} from "../data/jacketPotatoMenu";

import bigMacSpudImg from "../assets/spud-bigmac.jpg";

interface BagItem {
  variantId: VariantOption["id"];
  price: number;
  qty: number;
}

function isWeekendInMalaysia(): boolean {
  try {
    const day = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kuala_Lumpur",
      weekday: "short",
    }).format(new Date());
    return day === "Sat" || day === "Sun";
  } catch {
    const day = new Date().getDay();
    return day === 0 || day === 6;
  }
}

export function JacketPotatoPuchong() {
  const [lang, setLang] = useState<Lang>("en");
  const [selectedVariantId, setSelectedVariantId] =
    useState<VariantOption["id"]>("big");
  const [bag, setBag] = useState<BagItem[]>([
    { variantId: "big", price: 18, qty: 1 },
  ]);
  const [bagOpen, setBagOpen] = useState(false);
  const [fulfillment, setFulfillment] = useState<"pickup" | "delivery">("pickup");
  const [pickupTime, setPickupTime] = useState("");
  const [pickupTimeError, setPickupTimeError] = useState(false);
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const pageUrl = "https://anasfadzrin.com/jacket-potato-puchong";
    const pageTitle = "Jacket Potato by Hanna — Jacket Potato Big Mac Puchong";
    const pageDescription =
      "Jacket Potato by Hanna in Kampung Kenangan, Puchong. 90-minute cast-iron baked Jacket Potato Big Mac in Small (RM10) & Big (RM18). Pickup or delivery via WhatsApp.";
    const pageKeywords =
      "Jacket Potato by Hanna, Jacket Potato Puchong, Jacket Potato Big Mac, Baked Potato Puchong, Kampung Kenangan Puchong, Halal Food Puchong";

    const prevTitle = document.title;
    const prevLang = document.documentElement.lang;
    document.title = pageTitle;
    document.documentElement.lang = lang;

    const upsertMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      const existed = Boolean(el);
      const prevContent = el?.getAttribute("content") ?? null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      return () => {
        if (!existed) {
          el?.remove();
        } else if (prevContent !== null) {
          el?.setAttribute("content", prevContent);
        }
      };
    };

    const canonicalEl =
      document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
      (() => {
        const link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
        return link;
      })();
    const prevCanonical = canonicalEl.getAttribute("href");
    canonicalEl.setAttribute("href", pageUrl);

    const cleanups = [
      upsertMeta("name", "description", pageDescription),
      upsertMeta("name", "keywords", pageKeywords),
      upsertMeta("name", "robots", "index, follow"),
      upsertMeta("property", "og:type", "restaurant"),
      upsertMeta("property", "og:url", pageUrl),
      upsertMeta("property", "og:title", pageTitle),
      upsertMeta("property", "og:description", pageDescription),
      upsertMeta("name", "twitter:url", pageUrl),
      upsertMeta("name", "twitter:title", pageTitle),
      upsertMeta("name", "twitter:description", pageDescription),
    ];

    const jsonLdEl = document.createElement("script");
    jsonLdEl.type = "application/ld+json";
    jsonLdEl.setAttribute("data-jp-schema", "true");
    jsonLdEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "Jacket Potato by Hanna",
      url: pageUrl,
      telephone: "+601126112833",
      servesCuisine: ["Jacket Potato", "Western", "Halal"],
      priceRange: "RM10 - RM18",
      hasMap: LOCATION_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kampung Kenangan",
        addressLocality: "Puchong",
        addressRegion: "Selangor",
        postalCode: "47100",
        addressCountry: "MY",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 3.0287459,
        longitude: 101.5961807,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday"],
          opens: "11:30",
          closes: "23:30",
        },
      ],
      hasMenu: {
        "@type": "Menu",
        hasMenuSection: {
          "@type": "MenuSection",
          name: "Jacket Potato Big Mac",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Jacket Potato Big Mac (Small)",
              offers: { "@type": "Offer", price: "10.00", priceCurrency: "MYR" },
            },
            {
              "@type": "MenuItem",
              name: "Jacket Potato Big Mac (Big)",
              offers: { "@type": "Offer", price: "18.00", priceCurrency: "MYR" },
            },
          ],
        },
      },
    });
    document.head.appendChild(jsonLdEl);

    return () => {
      document.title = prevTitle;
      document.documentElement.lang = prevLang;
      if (prevCanonical) {
        canonicalEl.setAttribute("href", prevCanonical);
      }
      cleanups.forEach((fn) => fn());
      jsonLdEl.remove();
    };
  }, [lang]);

  const t = COPY[lang];
  const selectedVariant =
    BIG_MAC_VARIANTS.find((v) => v.id === selectedVariantId) ??
    BIG_MAC_VARIANTS[0];

  const totalItems = bag.reduce((sum, item) => sum + item.qty, 0);
  const bagSubtotal = bag.reduce((sum, item) => sum + item.price * item.qty, 0);

  const addVariantToBag = (variant: VariantOption) => {
    setOrderPlaced(false);
    setBag((prev) => {
      const existing = prev.find((i) => i.variantId === variant.id);
      if (existing) {
        return prev.map((i) =>
          i.variantId === variant.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { variantId: variant.id, price: variant.price, qty: 1 }];
    });
    setBagOpen(true);
  };

  const updateQty = (variantId: VariantOption["id"], delta: number) => {
    setBag((prev) =>
      prev
        .map((item) =>
          item.variantId === variantId
            ? { ...item, qty: item.qty + delta }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const isOpenToday = isWeekendInMalaysia();

  const handleCheckout = () => {
    if (!isOpenToday) {
      return;
    }
    const trimmedAddress = address.trim();
    if (fulfillment === "pickup" && !pickupTime) {
      setPickupTimeError(true);
      return;
    }
    if (fulfillment === "delivery" && !trimmedAddress) {
      setAddressError(true);
      return;
    }

    const itemLines = bag.map((item) => {
      const variant =
        BIG_MAC_VARIANTS.find((v) => v.id === item.variantId) ??
        BIG_MAC_VARIANTS[0];
      return `- ${item.qty}x ${t.menuSection.title} (${variant.label[lang]}) — RM${(
        item.price * item.qty
      ).toFixed(2)}`;
    });

    const orderLines = [
      `*${t.brand}*`,
      "",
      ...itemLines,
      "",
      `*${t.drawer.subtotal}:* RM${bagSubtotal.toFixed(2)}`,
      `*${t.drawer.fulfillmentLabel}:* ${
        fulfillment === "pickup" ? t.drawer.pickup : t.drawer.delivery
      }`,
      ...(fulfillment === "pickup"
        ? [`*${t.drawer.pickupTimeLabel}:* ${pickupTime}`]
        : [`*${t.drawer.addressLabel}:* ${trimmedAddress}`]),
    ];

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      orderLines.join("\n")
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setPickupTimeError(false);
    setAddressError(false);
    setOrderPlaced(true);
    setBag([]);
  };

  return (
    <div className="jp-page">
      {/* Sticky Navbar */}
      <header className="jp-navbar">
        <div className="jp-container jp-navbar__inner">
          <a href="#top" className="jp-brand">
            <span className="jp-brand__mark">H</span>
            <span>{t.brand}</span>
          </a>

          <nav className="jp-nav-links" aria-label="Primary">
            <a href="#menu">{t.nav.menu}</a>
            <a href="#craft">{t.nav.craft}</a>
            <a href="#reviews">{t.nav.reviews}</a>
          </nav>

          <div className="jp-nav-actions">
            <div className="jp-lang-switch" role="group" aria-label="Language switch">
              <button
                type="button"
                className={`jp-lang-switch__btn ${
                  lang === "en" ? "jp-lang-switch__btn--active" : ""
                }`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                type="button"
                className={`jp-lang-switch__btn ${
                  lang === "ms" ? "jp-lang-switch__btn--active" : ""
                }`}
                onClick={() => setLang("ms")}
              >
                BM
              </button>
            </div>

            <button
              type="button"
              className="jp-bag-btn"
              onClick={() => setBagOpen(true)}
              aria-label={t.nav.bag}
            >
              <span>{t.nav.bag}</span>
              <span className="jp-bag-btn__count">{totalItems}</span>
            </button>
          </div>
        </div>
      </header>

      <main>
      {/* Hero with Scroll-Tilt Showcase */}
      <section id="top" className="jp-hero">
        <div className="jp-container jp-hero__grid">
          <div>
            <span className="jp-eyebrow">{t.hero.eyebrow}</span>
            <h1 className="jp-hero__title">
              {t.hero.titleTop} <em>{t.hero.titleEm}</em>
            </h1>
            <p className="jp-hero__subtitle">{t.hero.subtitle}</p>
            <div className="jp-hero__actions">
              <a href="#menu" className="jp-btn-primary">
                {t.hero.ctaPrimary}
              </a>
              <a href="#menu" className="jp-btn-secondary">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="jp-hero__stats">
              {t.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="jp-stat__value">{stat.value}</div>
                  <div className="jp-stat__label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <ScrollTilt
            maxTiltX={12}
            maxTiltY={9}
            centerScale={1.03}
            className="jp-hero__visual"
          >
            <div className="jp-hero__img-wrap">
              <img
                src={bigMacSpudImg}
                alt="Jacket Potato Big Mac"
                className="jp-hero__img"
              />
              <div className="jp-hero__badge-float">
                <div>
                  <div className="jp-hero__badge-title">{t.hero.badgeTitle}</div>
                  <div className="jp-hero__badge-sub">{t.hero.badgeSub}</div>
                </div>
                <div className="jp-hero__badge-price">{t.hero.badgePrice}</div>
              </div>
            </div>
          </ScrollTilt>
        </div>
      </section>

      {/* Ticker */}
      <div className="jp-ticker" aria-hidden="true">
        <div className="jp-ticker__track">
          {[...t.ticker, ...t.ticker].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* The Only Menu: Jacket Potato Big Mac (Small RM10 / Big RM18) */}
      <section id="menu" className="jp-section">
        <div className="jp-container">
          <div className="jp-section__header">
            <div>
              <span className="jp-eyebrow">{t.menuSection.eyebrow}</span>
              <h2 className="jp-section__title">{t.menuSection.title}</h2>
            </div>
            <p className="jp-section__desc">{t.menuSection.desc}</p>
          </div>

          <div className="jp-bigmac-showcase">
            <ScrollTilt
              maxTiltX={10}
              maxTiltY={8}
              centerScale={1.02}
              className="jp-bigmac-photo-card"
            >
              <img
                src={bigMacSpudImg}
                alt={t.menuSection.title}
                className="jp-bigmac-photo-card__img"
              />
            </ScrollTilt>

            <ScrollTilt
              maxTiltX={8}
              maxTiltY={6}
              tiltDirection={-1}
              centerScale={1.01}
            >
              <div className="jp-bigmac-panel">
                <div>
                  <h3 className="jp-option-group__title">
                    {t.menuSection.chooseSize}
                  </h3>
                  <div className="jp-variant-grid">
                    {BIG_MAC_VARIANTS.map((variant) => (
                      <button
                        key={variant.id}
                        type="button"
                        className={`jp-variant-card ${
                          selectedVariantId === variant.id
                            ? "jp-variant-card--active"
                            : ""
                        }`}
                        onClick={() => setSelectedVariantId(variant.id)}
                      >
                        <div className="jp-variant-card__top">
                          <span className="jp-variant-card__name">
                            {variant.label[lang]}
                          </span>
                          <span className="jp-variant-card__price">
                            RM{variant.price}
                          </span>
                        </div>
                        <div className="jp-variant-card__weight">
                          {variant.weight[lang]}
                        </div>
                        <div className="jp-variant-card__desc">
                          {variant.desc[lang]}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <strong style={{ fontSize: "0.92rem" }}>
                    {t.menuSection.includedTitle}
                  </strong>
                  <ul className="jp-included-list">
                    {t.menuSection.includedItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className="jp-btn-primary"
                  style={{ width: "100%" }}
                  onClick={() => addVariantToBag(selectedVariant)}
                >
                  {t.menuSection.addBtn} — {selectedVariant.label[lang]} (RM
                  {selectedVariant.price})
                </button>
              </div>
            </ScrollTilt>
          </div>
        </div>
      </section>

      {/* 90-Minute Craft with Scroll-Tilt Cards */}
      <section id="craft" className="jp-section jp-section--alt">
        <div className="jp-container">
          <div className="jp-section__header">
            <div>
              <span className="jp-eyebrow">{t.craftSection.eyebrow}</span>
              <h2 className="jp-section__title">{t.craftSection.title}</h2>
            </div>
            <p className="jp-section__desc">{t.craftSection.desc}</p>
          </div>

          <div className="jp-craft-grid">
            {t.craftSection.steps.map((item, idx) => (
              <ScrollTilt
                key={item.step}
                maxTiltX={10}
                maxTiltY={8}
                tiltDirection={idx === 1 ? -1 : 1}
              >
                <div className="jp-craft-card">
                  <div className="jp-craft-card__top">
                    <span className="jp-craft-card__num">{item.step}</span>
                    <span className="jp-craft-card__stat">{item.stat}</span>
                  </div>
                  <h3 className="jp-craft-card__title">{item.title}</h3>
                  <p className="jp-craft-card__body">{item.body}</p>
                </div>
              </ScrollTilt>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="jp-section">
        <div className="jp-container">
          <div className="jp-section__header">
            <div>
              <span className="jp-eyebrow">{t.reviewsSection.eyebrow}</span>
              <h2 className="jp-section__title">{t.reviewsSection.title}</h2>
            </div>
          </div>
          <div className="jp-reviews-grid">
            {t.reviewsSection.items.map((review) => (
              <div key={review.author} className="jp-review-card">
                <div className="jp-review-card__stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="jp-review-card__quote">“{review.quote}”</p>
                <div>
                  <div className="jp-review-card__author">{review.author}</div>
                  <div className="jp-review-card__tag">{review.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="jp-footer">
        <div className="jp-container">
          <div className="jp-footer__grid">
            <div>
              <div className="jp-brand" style={{ marginBottom: "0.75rem" }}>
                <span className="jp-brand__mark">H</span>
                <span>{t.brand}</span>
              </div>
              <p className="jp-footer__text">{t.footer.desc}</p>
            </div>
            <div>
              <h4 className="jp-footer__heading">{t.footer.hoursTitle}</h4>
              <p className="jp-footer__text" style={{ whiteSpace: "pre-line" }}>
                {t.footer.hours}
              </p>
            </div>
            <div>
              <h4 className="jp-footer__heading">{t.footer.pickupTitle}</h4>
              <p className="jp-footer__text" style={{ whiteSpace: "pre-line" }}>
                {t.footer.pickup}
              </p>
              <a
                href={LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="jp-footer__link"
              >
                {t.footer.mapCta}
              </a>
            </div>
          </div>
          <div className="jp-footer__bottom">
            <span>
              © {new Date().getFullYear()} {t.footer.copyright}
            </span>
            <span>{t.footer.bakedFresh}</span>
          </div>
        </div>
      </footer>

      {/* Order Bag Drawer */}
      {bagOpen && (
        <div
          className="jp-drawer-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={t.drawer.title}
          onClick={() => setBagOpen(false)}
        >
          <div className="jp-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="jp-drawer__header">
              <h2 className="jp-drawer__title">{t.drawer.title}</h2>
              <button
                type="button"
                className="jp-icon-btn"
                onClick={() => setBagOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="jp-drawer__items">
              {orderPlaced ? (
                <div className="jp-order-confirm">
                  <div className="jp-order-confirm__badge">✓</div>
                  <h3
                    style={{
                      fontFamily: "var(--jp-font-display)",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    {t.drawer.confirmedTitle}
                  </h3>
                  <p className="jp-footer__text">{t.drawer.confirmedBody}</p>
                </div>
              ) : bag.length === 0 ? (
                <p className="jp-footer__text">{t.drawer.empty}</p>
              ) : (
                bag.map((item) => {
                  const variant =
                    BIG_MAC_VARIANTS.find((v) => v.id === item.variantId) ??
                    BIG_MAC_VARIANTS[0];
                  return (
                    <div key={item.variantId} className="jp-bag-item">
                      <div>
                        <div className="jp-bag-item__name">
                          {t.menuSection.title} ({variant.label[lang]})
                        </div>
                        <div className="jp-bag-item__sub">
                          {variant.weight[lang]}
                        </div>
                        <div
                          className="jp-bag-item__sub"
                          style={{ color: "var(--jp-gold-bright)" }}
                        >
                          RM{(item.price * item.qty).toFixed(2)}
                        </div>
                      </div>
                      <div className="jp-qty-controls">
                        <button
                          type="button"
                          className="jp-qty-btn"
                          onClick={() => updateQty(item.variantId, -1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span>{item.qty}</span>
                        <button
                          type="button"
                          className="jp-qty-btn"
                          onClick={() => updateQty(item.variantId, 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {!orderPlaced && bag.length > 0 && (
              <div className="jp-drawer__footer">
                <div className="jp-fulfillment">
                  <div className="jp-fulfillment__label">
                    {t.drawer.fulfillmentLabel}
                  </div>
                  <div
                    className="jp-fulfillment__grid"
                    role="radiogroup"
                    aria-label={t.drawer.fulfillmentLabel}
                  >
                    <button
                      type="button"
                      role="radio"
                      aria-checked={fulfillment === "pickup"}
                      className={`jp-fulfillment__btn ${
                        fulfillment === "pickup"
                          ? "jp-fulfillment__btn--active"
                          : ""
                      }`}
                      onClick={() => {
                        setFulfillment("pickup");
                        setAddressError(false);
                      }}
                    >
                      {t.drawer.pickup}
                    </button>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={fulfillment === "delivery"}
                      className={`jp-fulfillment__btn ${
                        fulfillment === "delivery"
                          ? "jp-fulfillment__btn--active"
                          : ""
                      }`}
                      onClick={() => {
                        setFulfillment("delivery");
                        setPickupTimeError(false);
                      }}
                    >
                      {t.drawer.delivery}
                    </button>
                  </div>

                  {fulfillment === "pickup" ? (
                    <>
                      <p className="jp-fulfillment__note">
                        {t.drawer.pickupNote}
                      </p>
                      <div className="jp-address-field">
                        <label
                          htmlFor="jp-pickup-time"
                          className="jp-address-field__label"
                        >
                          {t.drawer.pickupTimeLabel}
                        </label>
                        <input
                          id="jp-pickup-time"
                          type="time"
                          className={`jp-address-field__input jp-pickup-time__input ${
                            pickupTimeError
                              ? "jp-address-field__input--error"
                              : ""
                          }`}
                          value={pickupTime}
                          aria-invalid={pickupTimeError}
                          onChange={(e) => {
                            setPickupTime(e.target.value);
                            if (pickupTimeError && e.target.value) {
                              setPickupTimeError(false);
                            }
                          }}
                        />
                        {pickupTimeError && (
                          <p className="jp-address-field__error" role="alert">
                            {t.drawer.pickupTimeError}
                          </p>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="jp-address-field">
                      <label
                        htmlFor="jp-delivery-address"
                        className="jp-address-field__label"
                      >
                        {t.drawer.addressLabel}
                      </label>
                      <textarea
                        id="jp-delivery-address"
                        rows={3}
                        className={`jp-address-field__input ${
                          addressError ? "jp-address-field__input--error" : ""
                        }`}
                        placeholder={t.drawer.addressPlaceholder}
                        value={address}
                        aria-invalid={addressError}
                        onChange={(e) => {
                          setAddress(e.target.value);
                          if (addressError && e.target.value.trim()) {
                            setAddressError(false);
                          }
                        }}
                      />
                      {addressError && (
                        <p className="jp-address-field__error" role="alert">
                          {t.drawer.addressError}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {!isOpenToday && (
                  <p className="jp-closed-notice" role="status">
                    {t.drawer.closedNotice}
                  </p>
                )}

                <div className="jp-drawer__total">
                  <span>{t.drawer.subtotal}</span>
                  <span>RM{bagSubtotal.toFixed(2)}</span>
                </div>
                <button
                  type="button"
                  className="jp-btn-primary"
                  style={{ width: "100%" }}
                  disabled={!isOpenToday}
                  onClick={handleCheckout}
                >
                  {isOpenToday
                    ? `${t.drawer.checkout} · RM${bagSubtotal.toFixed(2)}`
                    : t.drawer.closedButton}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default JacketPotatoPuchong;
