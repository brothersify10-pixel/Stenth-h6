import Image from "next/image"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
        <p className="text-slate-300 leading-relaxed">
          We're here to help you navigate the digital landscape and achieve your business goals. Whether you need
          a complete digital transformation or want to optimize your existing campaigns, our team is ready to
          deliver exceptional results.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-xl flex items-center justify-center">
            <span className="text-white text-xl">📧</span>
          </div>
          <div>
            <div className="text-white font-medium">Email</div>
            <div className="text-slate-300">info@stenth.com</div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-xl flex items-center justify-center">
            <span className="text-white text-xl">🏢</span>
          </div>
          <div>
            <div className="text-white font-medium">Canada Office</div>
            <div className="text-slate-300">368 Prince of Wales Dr, Mississauga, ON L5B 0A1</div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-xl flex items-center justify-center">
            <span className="text-white text-xl">🇦🇺</span>
          </div>
          <div>
            <div className="text-white font-medium">Australia Office</div>
            <div className="text-slate-300">Picnic Ave Clyde North VIC 3978</div>
          </div>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/modern-office-space-digital-marketing-team.jpg"
          alt="Stenth digital marketing team office workspace"
          width={600}
          height={400}
          className="rounded-2xl shadow-2xl w-full h-auto"
          loading="lazy"
          quality={70}
        />
      </div>
    </div>
  )
}