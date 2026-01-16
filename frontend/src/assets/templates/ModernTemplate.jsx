import { Mail, Phone, MapPin, Linkedin, Globe, Github } from "lucide-react";

const ModernTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800">
      {/* Header */}
      <header
        className="p-8 text-white"
        style={{ backgroundColor: accentColor }}
      >
        <h1 className="text-3xl font-light mb-2">
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
          {data.personal_info?.email && (
            <div className="flex items-center gap-2">
              <Mail className="size-4" />
              <span>{data.personal_info.email}</span>
            </div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-2">
              <Phone className="size-4" />
              <span>{data.personal_info.phone}</span>
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span>{data.personal_info.location}</span>
            </div>
          )}
          {data.personal_info?.linkedin && (
            <a
              target="_blank"
              rel="noreferrer"
              href={data.personal_info.linkedin}
              className="flex items-center gap-2"
            >
              <Linkedin className="size-4" />
              <span className="break-all text-xs">
                {data.personal_info.linkedin.split("https://www.")[1]
                  ? data.personal_info.linkedin.split("https://www.")[1]
                  : data.personal_info.linkedin}
              </span>
            </a>
          )}
          {data.personal_info?.website && (
            <a
              target="_blank"
              rel="noreferrer"
              href={data.personal_info.website}
              className="flex items-center gap-2"
            >
              <Globe className="size-4" />
              <span className="break-all text-xs">
                {data.personal_info.website.split("https://")[1]
                  ? data.personal_info.website.split("https://")[1]
                  : data.personal_info.website}
              </span>
            </a>
          )}
          {data.personal_info?.github && (
            <a
              target="_blank"
              rel="noreferrer"
              href={data.personal_info.github}
              className="flex items-center gap-2"
            >
              <Github className="size-4" />
              <span className="break-all text-xs">
                {data.personal_info.github.split("https://github.com/")[1]
                  ? data.personal_info.github.split("https://github.com/")[1]
                  : data.personal_info.github}
              </span>
            </a>
          )}
        </div>
      </header>

      <div className="p-8">
        {/* Professional Summary */}
        {data.professional_summary && (
          <section className="mb-7">
            <h2 className="text-xl font-light mb-4 pb-1 border-b border-gray-200">
              Professional Summary
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-5">
            <h2 className="text-xl font-light mb-3 pb-1 border-b border-gray-200">
              Experience
            </h2>

            <div className="space-y-4">
              {data.experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-4 border-l border-gray-200"
                >
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {exp.position}
                      </h3>
                      <p
                        className="font-medium text-sm"
                        style={{ color: accentColor }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {formatDate(exp.start_date)} –{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </div>
                  </div>

                  {exp.description && (
                    <div className="text-gray-700 leading-snug mt-2 text-xs whitespace-pre-line">
                      {exp.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project && data.project.length > 0 && (
          <section className="mb-5">
            <h2 className="text-xl font-light mb-2 pb-1 border-b border-gray-200">
              Projects
            </h2>

            <div className="space-y-3">
              {data.project.map((p, index) => (
                <div
                  key={index}
                  className="relative pl-4 border-l border-gray-200"
                  style={{ borderLeftColor: accentColor }}
                >
                  <h3 className="text-base font-medium text-gray-900">
                    {p.name}
                  </h3>

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs hover:underline"
                      style={{ color: accentColor }}
                    >
                      {p.link}
                    </a>
                  )}

                  {p.description && (
                    <div className="text-gray-700 leading-snug text-xs mt-1">
                      {p.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Education (FIXED) */}
          {data.education && data.education.length > 0 && (
            <section>
              <h2 className="text-xl font-light mb-2 pb-1 border-b border-gray-200">
                Education
              </h2>

              <div className="space-y-2">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {edu.degree}
                      {edu.field && ` in ${edu.field}`}
                    </h3>

                    <p className="text-xs" style={{ color: accentColor }}>
                      {edu.institution}
                    </p>

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
                ))}
              </div>
            </section>
          )}

          {/* Right Column - Skills and Languages */}
          <div>
            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
              <section>
                <h2 className="text-xl font-light mb-2 pb-1 border-b border-gray-200">
                  Skills
                </h2>

                <div className="flex flex-wrap gap-1">
                  {data.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-xs text-white rounded-full"
                      style={{ backgroundColor: accentColor }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Languages */}
            {data.languages && data.languages.length > 0 && (
              <section className="mt-3">
                <h2 className="text-xl font-light mb-2 pb-1 border-b border-gray-200">
                  Languages
                </h2>

                <div className="flex flex-wrap gap-1">
                  {data.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-xs text-white rounded-full"
                      style={{ backgroundColor: accentColor }}
                    >
                      {lang.name} ({lang.proficiency})
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
