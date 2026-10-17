import { ExternalLink, Eye, Github, X } from "lucide-react";
import React from "react";
import { useToast } from "../hooks/use-toast";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  // category: string;
  url?: string;
}

const Projects: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollTrigger({
    threshold: 0.2,
    rootMargin: "-50px",
  });
  const { toast } = useToast();
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleGithubClick = React.useCallback(() => {
    toast({
      title: "Contact Developer",
      description: "Please contact me to see the source code for this project.",
    });

    setTimeout(() => {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  }, [toast]);

  const handlePreviewClick = React.useCallback((project: Project) => {
    if (project.url) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  }, []);

  const projects = React.useMemo<Project[]>(
    () => [
      {
        title: "Senaei — Industrial Services Platform",
        description:
          "Senaei is a digital platform associated with Saudi Arabia’s Ministry of Industry and Mineral Resources, providing centralized access to industrial services and entity management. It enables businesses to manage industrial facilities, access government services, track applications, and support their industrial operations through digital solutions.",
        image:
          "https://plus.unsplash.com/premium_photo-1664300897998-d2522c523b08?w=600&h=400&fit=crop&crop=center",
        tech: [
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "TypeScript",
          "Zod",
          "Zustand",
        ],
        // category: "Full Stack",
        url: "https://app.industry.sa/",
      },
      {
        title: "Invest Saudi — National Investment Platform",
        description:
          "Invest Saudi is Saudi Arabia’s national platform for attracting domestic and international investment, offering access to business opportunities, investment registration services, sector insights, and investor support to facilitate business establishment and growth in alignment with Vision 2030.",
        image:
          "https://investsaudi.sa/leadersip-and-national-vision/national-strategies/feature-national-strategy.webp?w=600&h=400&fit=crop&crop=center",
        tech: ["React.js", "Vite", "Tailwind CSS", "TypeScript", "Wordpress"],
        // category: "Full Stack",
        url: "https://investsaudi.sa/",
      },
      {
        title: "TaskPay — Secure Service Contracting Platform",
        description:
          "Built a scalable platform using Next.js and Google Cloud, supporting thousands of real-time transactions weekly. Integrated ACH, Wire, RTP payments via IBANERA, NMI, and PayPal, increasing success rates by 30%.",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
        tech: [
          "Nest.js",
          "Next.js",
          "GCP",
          "Fireblocks",
          "NMI",
          "PayPal",
          "PostgreSQL",
        ],
        // category: "Full Stack",
        url: "https://taskpay.com",
      },
      {
        title: "Elysium Chain — Layer-1 blockchain platform",
        description:
          "Elysium is a fully Ethereum-compatible smart contract platform on Polkadot. As such, you can interact with Elysium via the Ethereum API and Substrate API. You can interact with your Elysium account with MetaMask, Ledger, and other Ethereum-compatible wallets by simply adding Elysium’s network configurations.",
        image:
          "https://images.unsplash.com/photo-1626162987518-4fee900a9323?w=600&h=400&fit=crop&crop=center",
        tech: ["HTML 5", "Bootstrap 5", "Web 3", "JavaScript"],
        // category: "Full Stack",
        url: "https://elysiumchain.tech/",
      },
      {
        title: "Clone Hub — AI-Powered Digital Engagement Platform",
        description:
          "Developed a SaaS product with Next.js and PostgreSQL, powering over 10,000 AI clones for 24/7 audience engagement. Boosted user retention by 40% with monetization via subscriptions and pay-per-use.",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center",
        tech: ["Nest.js", "Next.js", "PostgreSQL", "AI/ML"],
        // category: "SaaS",
        url: "https://clonehub.com",
      },
      {
        title: "Source1 — Industrial Supply & Procurement Platform",
        description:
          "Source1 Distribution is an international industrial supply company providing equipment, materials, spare parts, and procurement solutions to businesses across multiple industries.",
        image:
          "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop&crop=center",
        tech: ["HTML 5", "Bootstrap 5", "JavaScript", "JQuery"],
        // category: "SaaS",
        url: "https://cryptodailysplit.com/",
      },
      {
        title: "G1G — Travel Insurance & Travel Safety Platform",
        description:
          "G1G is a travel technology platform that connects travelers and businesses with travel insurance, medical coverage, and personalized travel safety solutions. It leverages AI-driven risk assessment and digital integrations to simplify access to travel protection products and enhance the overall travel experience.",
        image:
          "https://plus.unsplash.com/premium_photo-1683121257579-d40449389b63?w=600&h=400&fit=crop&crop=center",
        tech: ["HTML 5", "Bootstrap 5", "JavaScript", "JQuery"],
        // category: "Enterprise",
        url: "https://www.g1g.com/",
      },
      {
        title: "Crown IT Solutions — Software Development & Digital Solutions",
        description:
          "Crown IT Solutions is a technology services company specializing in custom software development, website and web application development, and digital content solutions. It helps businesses transform their ideas into practical digital products through tailored technology services designed to improve efficiency and support business growth.",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center",
        tech: ["HTML 5", "Bootstrap 5", "JavaScript", "JQuery"],
        // category: "Enterprise",
        url: "https://crownitsolutions.com/",
      },
      {
        title: "FGA — Theological Education & Ministry Training Platform",
        description:
          "FGA is the official website of FGA Theological Seminary in Lahore, Pakistan, providing information about theological education, academic programs, admissions, faculty, alumni, and campus life. The platform supports the institution's mission of equipping future Christian leaders, pastors, and missionaries for effective ministry and church development.",
        image:
          "https://images.unsplash.com/photo-1550720573-f2e7eb6e5032?w=600&h=400&fit=crop&crop=center",
        tech: ["HTML 5", "Bootstrap 5", "JavaScript", "JQuery"],
        // category: "E-commerce",
        url: "https://fgats.org/",
      },
    ],
    [],
  );

  const categories = React.useMemo(
    () => ["All", "Full Stack", "SaaS", "Enterprise", "E-commerce"],
    [],
  );
  const [activeCategory, setActiveCategory] = React.useState("All");

  const { elementRef: projectsRef, isVisible: projectsVisible } =
    useScrollTrigger({
      threshold: 0.1,
      rootMargin: "-100px",
    });

  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-blue-500 font-medium text-lg">
              - My Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Showcasing real-world applications and technical expertise in
              modern web development
            </p>
          </div>

          <div
            ref={projectsRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => {
              return (
                <div
                  key={project.title}
                  className={`group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-out transform ${
                    projectsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-100 translate-y-0 md:opacity-0 md:translate-y-10"
                  } hover:shadow-2xl hover:-translate-y-2`}
                  style={{
                    transitionDelay: projectsVisible
                      ? `${index * 100}ms`
                      : "0ms",
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <button
                          onClick={() => handlePreviewClick(project)}
                          aria-label="Preview project"
                          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
                          disabled={!project.url}
                        >
                          <Eye className="w-5 h-5 text-white" />
                        </button>
                        <button
                          onClick={handleGithubClick}
                          aria-label="View github repository"
                          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </button>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View project externally"
                            className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
                          >
                            <ExternalLink className="w-5 h-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom Preview Modal with Blue Gradient */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden">
            {/* Header - Reduced padding and spacing */}
            <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm border-b border-white/20">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span className="text-blue-200 text-sm font-medium">
                    Preview
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white">
                  {selectedProject.title}
                </h2>
                <p className="text-blue-100 text-xs">Live website preview</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200 text-white text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Site
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close preview modal"
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Content - Adjusted height to account for smaller header */}
            <div className="relative h-[calc(90vh-100px)]">
              <div className="absolute inset-4 bg-white rounded-2xl shadow-xl overflow-hidden">
                <iframe
                  src={selectedProject.url}
                  className="w-full h-full border-0"
                  title={`Preview of ${selectedProject.title}`}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
