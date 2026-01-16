const MinimalTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white text-gray-900 font-light">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-thin mb-2 tracking-wide">
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="flex flex-wrap gap-4 text-xs text-gray-600">
          {data.personal_info?.email && <span>{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
          {data.personal_info?.location && (
            <span>{data.personal_info.location}</span>
          )}
          {data.personal_info?.linkedin && (
            <span className="break-all">{data.personal_info.linkedin}</span>
          )}
          {data.personal_info?.website && (
            <span className="break-all">{data.personal_info.website}</span>
          )}
          {data.personal_info?.github && (
            <span className="break-all">{data.personal_info.github}</span>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {data.professional_summary && (
        <section className="mb-7">
          <p className="text-gray-700 text-sm leading-relaxed">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-7">
          <h2
            className="text-xs uppercase tracking-widest mb-4 font-medium"
            style={{ color: accentColor }}
          >
            Experience
          </h2>

          <div className="space-y-5">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-base font-medium">{exp.position}</h3>
                  <span className="text-xs text-gray-500">
                    {formatDate(exp.start_date)} –{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>
                <p className="text-gray-600 mb-1 text-xs">{exp.company}</p>
                {exp.description && (
                  <div className="text-gray-700 leading-snug text-xs whitespace-pre-line">
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
        <section className="mb-7">
          <h2
            className="text-xs uppercase tracking-widest mb-4 font-medium"
            style={{ color: accentColor }}
          >
            Projects
          </h2>

          <div className="space-y-3">
            {data.project.map((proj, index) => (
              <div key={index} className="flex flex-col gap-1">
                <h3 className="text-base font-medium">{proj.name}</h3>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs hover:underline"
                    style={{ color: accentColor }}
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
            className="text-xs uppercase tracking-widest mb-4 font-medium"
            style={{ color: accentColor }}
          >
            Education
          </h2>

          <div className="space-y-3">
            {data.education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-medium text-sm">
                      {edu.degree}
                      {edu.field && ` in ${edu.field}`}
                    </h3>
                    <p className="text-gray-600 text-xs">{edu.institution}</p>
                  </div>

                  <span className="text-xs text-gray-500">
                    {formatDate(edu.graduation_date)}
                    {edu.score && edu.score_type && (
                      <>
                        {" • "}
                        {edu.score_type === "cgpa"
                          ? `CGPA: ${edu.score}`
                          : `Percentage: ${edu.score}%`}
                      </>
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-5">
          <h2
            className="text-xs uppercase tracking-widest mb-3 font-medium"
            style={{ color: accentColor }}
          >
            Skills
          </h2>

          <div className="text-gray-700 text-xs">{data.skills.join(" • ")}</div>
        </section>
      )}

      {/* Languages */}
      {data.languages && data.languages.length > 0 && (
        <section className="mt-4">
          <h2
            className="text-xs uppercase tracking-widest mb-2 font-medium"
            style={{ color: accentColor }}
          >
            Languages
          </h2>

          <div className="text-gray-700 text-xs">
            {data.languages
              .map((lang) => `${lang.name} (${lang.proficiency})`)
              .join(" • ")}
          </div>
        </section>
      )}
    </div>
  );
};

export default MinimalTemplate;
