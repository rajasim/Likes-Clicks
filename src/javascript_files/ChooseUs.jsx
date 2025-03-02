import React from "react";
import "../css_files/ChooseUs.css";

function ChooseUs() {
  return (
    <section className="choose-us">
      <h1>Why Choose Us</h1>
      <div>
        <aside>
          <button>
          <i class="fa-solid fa-hand-holding-dollar"></i>
          </button>
          <blockquote>
            <h3>Affordable Pricing</h3>
            <p>
              Competative rates with no Compromise on quality, ensuring great
              value
            </p>
          </blockquote>
        </aside>
        <aside>
          <button>
          <i class="fa-solid fa-user-astronaut"></i>
          </button>
          <blockquote>
            <h3>Vast Experience</h3>
            <p>
              Years of Industry knowledge to deliver reliable and effective
              Solutions
            </p>
          </blockquote>
        </aside>
        <aside>
          <button>
          <i class="fa-solid fa-people-carry-box"></i>
          </button>
          <blockquote>
            <h3>Diverse Services</h3>
            <p>A full range of Digital Services tailored to meet your needs</p>
          </blockquote>
        </aside>
        <aside>
          <button>
          <i class="fa-solid fa-people-arrows"></i>
          </button>
          <blockquote>
            <h3>Free Consultation</h3>
            <p>No-Obligation Consultation to understand your goals</p>
          </blockquote>
        </aside>
        <aside>
          <button>
          <i class="fa-solid fa-user-gear"></i>
          </button>
          <blockquote>
            <h3>Australian Support</h3>
            <p>Local, friendly support is always available to assist you</p>
          </blockquote>
        </aside>
        <aside>
          <button>
          <i class="fa-solid fa-user-clock"></i>
          </button>
          <blockquote>
            <h3>Quick Turnaround</h3>
            <p>Efficient work to meet deadlines without compromising quality</p>
          </blockquote>
        </aside>
      </div>
    </section>
  );
}

export default ChooseUs;
