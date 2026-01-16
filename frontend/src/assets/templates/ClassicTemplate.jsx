import { Mail, Phone, MapPin, Linkedin, Globe, Github } from "lucide-react";

const ClassicTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed">
      {/* Header */}
      <header
        className="text-center mb-6 pb-4 border-b-2"
        style={{ borderColor: accentColor }}
      >
        <h1 className="text-2xl font-bold mb-1" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-600">
          {data.personal_info?.email && (
            <div className="flex items-center gap-1">
              <Mail className="size-4" />
              <span>{data.personal_info.email}</span>
            </div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-1">
              <Phone className="size-4" />
              <span>{data.personal_info.phone}</span>
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-1">
              <MapPin className="size-4" />
              <span>{data.personal_info.location}</span>
            </div>
          )}
          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="size-4" />
              <span className="break-all">{data.personal_info.linkedin}</span>
            </div>
          )}
          {data.personal_info?.website && (
            <div className="flex items-center gap-1">
              <Globe className="size-4" />
              <span className="break-all">{data.personal_info.website}</span>
            </div>
          )}
          {data.personal_info?.github && (
            <div className="flex items-center gap-1">
              <Github className="size-4" />
              <span className="break-all">{data.personal_info.github}</span>
            </div>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {data.professional_summary && (
        <section className="mb-5">
          <h2
            className="text-lg font-semibold mb-3"
            style={{ color: accentColor }}
          >
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-5">
          <h2
            className="text-lg font-semibold mb-3"
            style={{ color: accentColor }}
          >
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div
                key={index}
                className="pl-3 border-l-2"
                style={{ borderColor: accentColor }}
              >
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {exp.position}
                    </h3>
                    <p className="text-gray-700 font-medium text-xs">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-xs text-gray-600">
                    {formatDate(exp.start_date)} –{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </div>
                </div>

                {exp.description && (
                  <p className="text-gray-700 whitespace-pre-line text-xs leading-snug">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.project && data.project.length > 0 && (
        <section className="mb-7">
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: accentColor }}
          >
            PROJECTS
          </h2>

          <div className="space-y-4">
            {data.project.map((proj, index) => (
              <div key={index} className="pl-3 border-l-2 border-gray-300">
                <p className="font-semibold text-gray-800 text-sm">
                  {proj.name}
                </p>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    {proj.link}
                  </a>
                )}
                <p className="text-gray-600 text-xs">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education (FIXED) */}
      {data.education && data.education.length > 0 && (
        <section className="mb-7">
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: accentColor }}
          >
            EDUCATION
          </h2>

          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {edu.degree}
                      {edu.field && ` in ${edu.field}`}
                    </h3>
                    <p className="text-gray-700 text-xs">{edu.institution}</p>
                  </div>

                  <div className="text-xs text-gray-600">
                    {formatDate(edu.graduation_date)}
                    {edu.score && edu.score_type && (
                      <>
                        {" • "}
                        {edu.score_type === "cgpa"
                          ? `CGPA: ${edu.score}`
                          : `Percentage: ${edu.score}%`}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-7">
          <h2
            className="text-lg font-semibold mb-2"
            style={{ color: accentColor }}
          >
            CORE SKILLS
          </h2>

          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="text-gray-700 text-xs">
                • {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {data.languages && data.languages.length > 0 && (
        <section className="mb-3">
          <h2
            className="text-lg font-semibold mb-2"
            style={{ color: accentColor }}
          >
            LANGUAGES
          </h2>

          <div className="flex flex-wrap gap-2">
            {data.languages.map((lang, index) => (
              <span key={index} className="text-gray-700 text-xs">
                • {lang.name} ({lang.proficiency})
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
