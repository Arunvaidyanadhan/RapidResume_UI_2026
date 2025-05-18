// PDFTemplate2.jsx
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Register a font (optional)
Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxM.woff2', // normal
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      src: 'https://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1Mu51xIIzc.ttf', // italic
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
    {
      src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc9.ttf', // bold
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    {
      src: 'https://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51TjASc6CsE.ttf', // bold italic
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#f8f9fa",
    padding: 20,
    fontFamily: "Roboto",
    fontSize: 11,
    color: "#000",
  },
  header: {
    backgroundColor: "#343a40",
    color: "white",
    padding: 8,
    textAlign: "center",
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  summary: {
    fontSize: 12,
    fontStyle: "italic",
    marginBottom: 6,
  },
  contact: {
    fontSize: 10,
    marginBottom: 6,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    borderBottomWidth: 2,
    borderBottomColor: "#0d6efd",
    borderBottomStyle: "solid",
    paddingBottom: 3,
    marginBottom: 6,
    fontWeight: "bold",
  },
  skillBadge: {
    display: "inline-block",
    backgroundColor: "#0d6efd",
    color: "white",
    padding: "2px 6px",
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 4,
    fontSize: 10,
  },
  experienceItem: {
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  dates: {
    fontSize: 10,
    marginBottom: 4,
  },
  descriptionList: {
    marginLeft: 10,
    marginBottom: 4,
  },
  eduItem: {
    marginBottom: 8,
  },
  degree: {
    fontSize: 12,
    fontWeight: "bold",
  },
  institution: {
    fontSize: 10,
  },
});

const PDFTemplate2 = ({ data }) => {
  const {
    personalDetails = {},
    summary = "",
    skills = [],
    workExperience = [],
    education = [],
  } = data;

  const { firstName, lastName, email, phone, linkedin } = personalDetails;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.summary}>{summary}</Text>
          <Text style={styles.contact}>
            Email: {email} | Phone: {phone} | LinkedIn: {linkedin}
          </Text>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {skills.map((skill, index) => (
              <Text key={index} style={styles.skillBadge}>
                {skill}
              </Text>
            ))}
          </View>
        </View>

        {/* Work Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {workExperience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.jobTitle}>
                {exp.jobTitle} - {exp.company}
              </Text>
              <Text style={styles.dates}>
                {exp.startDate} – {exp.endDate}
              </Text>
              <View style={styles.descriptionList}>
                {exp.description &&
                  exp.description.split("\n").map((line, idx) => (
                    <Text key={idx}>• {line}</Text>
                  ))}
              </View>
            </View>
          ))}
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu, index) => (
            <View key={index} style={styles.eduItem}>
              <Text style={styles.degree}>{edu.degree}</Text>
              <Text style={styles.institution}>
                {edu.institution}, {edu.startDate} – {edu.endDate}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDFTemplate2;
