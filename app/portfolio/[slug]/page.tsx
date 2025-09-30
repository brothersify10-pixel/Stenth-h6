import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { caseStudyData } from "@/lib/case-studies-data";
import FloatingElements from "@/components/floating-elements";
import RelatedPages from "@/components/related-pages";


// Generate static paths for all case studies
export async function generateStaticParams() {
  return Object.keys(caseStudyData).map((slug) => ({
    slug,
  }));
}

// Generate metadata for each case study
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudyData[slug as keyof typeof caseStudyData];

  if (!study) {
    return {
      title: 'Case Study Not Found | Stenth',
    };
  }

  return {
    title: `${study.title} - ${study.metric} | Stenth Case Study`,
    description: study.description,
    openGraph: {
      title: `${study.title} - ${study.metric}`,
      description: study.description,
      images: [study.images[0]],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudyData[slug as keyof typeof caseStudyData];

  // Remove debug logging for better performance
  // useEffect(() => {
  //   console.log('Portfolio slug:', slug);
  //   console.log('Available studies:', Object.keys(caseStudyData));
  //   console.log('Study found:', !!study);
  // }, [slug, study]);

  if (!study) {
    return (
      <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Case Study Not Found</h1>
            <p className="text-slate-300 mb-8">
              Looking for: "{slug}"
            </p>
            <p className="text-slate-400 mb-8">
              Available case studies: {Object.keys(caseStudyData).join(', ')}
            </p>
            <Button
              asChild
              className="focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <Link href="/portfolio">Back to Portfolio</Link>
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <>
      <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <FloatingElements />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-8">
              <study.icon className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">{study.title}</h1>

            <p className="text-xl text-slate-300 mb-8">{study.industry}</p>

            <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-8">
              {study.metric}
            </div>

            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">{study.description}</p>
          </div>

         
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {study.images.map((image, index) => (
              <div key={index} className="relative group">
                <div className="aspect-[16/9] overflow-hidden rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <Image
                    src={image}
                    alt={`${study.title} - Image ${index + 1}`}
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                    quality={85}
                    loading={index === 0 ? "eager" : "lazy"}
                    unoptimized={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-emerald-400/10 to-purple-600/20 mix-blend-overlay opacity-100 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">The Challenge</h2>
              <p className="text-slate-300 leading-relaxed">{study.challenge}</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">Our Solution</h2>
              <p className="text-slate-300 leading-relaxed">{study.solution}</p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Results Achieved</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {study.results.map((result, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-300 text-lg">{result}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Ready for Similar Results?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <Link href="/book">Book Your Strategy Session</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <Link href="/portfolio">View More Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <RelatedPages title="More Case Studies & Services" limit={6} className="bg-slate-900/30" />
    </main>
    </>
  );
}
