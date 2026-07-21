import SubscribeForm from "./SubscribeForm";


export const metadata = {
  title: "asymptote",
  description: "Drop your email below to get on the list.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OnTheList() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">asymptote</h1>

      <p className="mb-4">
        {`Something meaningful is in the works — and I'd love for you to be among the first to know.`}
      </p>
      {/* <p className="mb-8 text-neutral-400">
        {`Leave your email and a line about who you are.`}
      </p> */}

      <SubscribeForm />
    </section>
  );
}
