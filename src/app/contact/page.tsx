import ContactCard from "../_components/contact";

export default function Contact() {
  return (
    <main className="p-4 sm:p-6">
      <section>
        <div className="text-center">
          <h1 className="text-2xl mt-6 sm:text-3xl font-bold ">
            Let's Get In Touch!
          </h1>
        </div>
        <div className="text-left mt-12 mb-20 px-6 sm:px-36 ">
          <p className="text-sm sm:text-base font-semibold">
            Thank you for reaching out! I'd love to hear your thoughts,
            questions, or ideas. You can email me directly at
            swanandkhonde1999@gmail.com. I try to reply within a day, but it
            might take a bit longer if I'm busy. You can also connect with me on
            LinkedIn and Twitter. If not on LinkedIn, I'm definitely active on
            Instagram, where I share updates and enjoy chatting with followers.
            Thanks again for reaching out, and I look forward to hearing from
            you!{" "}
          </p>
        </div>

        <ContactCard />
      </section>
    </main>
  );
}
