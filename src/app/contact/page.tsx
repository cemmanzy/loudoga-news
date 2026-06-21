export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="mb-8 text-5xl font-black">
        Contact Us
      </h1>

      <div className="space-y-6 text-lg leading-8 text-slate-700">
        <p>
          Thank you for your interest in Loud Oga
          News & TV. We welcome enquiries, news
          tips, partnership opportunities, media
          requests, advertising enquiries, event
          coverage requests, and general feedback
          from our readers, clients, and partners.
        </p>

        <p>
          Whether you have a story to share, need
          media publicity for an event, require
          public relations support, or would like
          to collaborate with our team, we would
          love to hear from you.
        </p>

        <div className="mt-10 rounded-2xl bg-slate-100 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Contact Information
          </h2>

          <div className="space-y-3">
            <p>
              <strong>Email:</strong>{" "}
              editor@loudoganews.com
            </p>

            <p>
              <strong>Website:</strong>{" "}
              www.loudoganews.com
            </p>

            <p>
              <strong>X (Twitter):</strong>{" "}
              @loudoganewstv
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="mb-4 text-3xl font-bold">
            What You Can Contact Us For
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>News tips and story submissions</li>
            <li>Media coverage requests</li>
            <li>Public relations services</li>
            <li>Event publicity and promotion</li>
            <li>Advertising opportunities</li>
            <li>Partnerships and collaborations</li>
            <li>Corrections and feedback</li>
            <li>General enquiries</li>
          </ul>
        </div>

        <div className="mt-12 rounded-2xl bg-red-50 p-8">
          <p className="text-xl font-medium text-slate-800">
            Our team is committed to responding to
            enquiries promptly and professionally.
            We look forward to hearing from you and
            working together to share stories,
            promote brands, and create meaningful
            impact.
          </p>
        </div>
      </div>
    </main>
  );
}

