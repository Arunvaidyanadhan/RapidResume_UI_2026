import React from 'react';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 28, fontFamily: 'Helvetica', fontSize: 10, color: '#0f172a', lineHeight: 1.5 },
  header: { marginBottom: 18 },
  name: { fontSize: 24, fontWeight: 700 },
  headline: { marginTop: 4, fontSize: 12, color: '#1f7a6d', fontWeight: 700 },
  contact: { marginTop: 6, fontSize: 10, color: '#475569' },
  section: { marginBottom: 14 },
  sectionTitle: { fontSize: 10, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 8, color: '#334155', borderBottomWidth: 1, borderBottomColor: '#cbd5e1', paddingBottom: 4 },
  item: { marginBottom: 10 },
  itemRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 8 },
  itemTitle: { fontSize: 11, fontWeight: 700 },
  itemSub: { fontSize: 10, color: '#475569' },
  bullets: { marginTop: 4, paddingLeft: 10 },
  bullet: { marginBottom: 3, color: '#475569' },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  tag: { borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 999, paddingVertical: 3, paddingHorizontal: 8, fontSize: 9, backgroundColor: '#f8fafc' },
  split: { flexDirection: 'row', gap: 16 },
  mainCol: { flexGrow: 1.4 },
  sideCol: { flexGrow: 0.9 },
  card: { borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 12, padding: 10, marginBottom: 10, backgroundColor: '#ffffff' },
  summaryBox: { borderWidth: 1, borderColor: '#d7eeea', backgroundColor: '#eef8f6', borderRadius: 12, padding: 10 }
});

function dateRange(item) {
  return [item.startDate, item.current ? 'Present' : item.endDate].filter(Boolean).join(' - ');
}

function ResumePdfSection({ title, children }) {
  if (!children) return null;
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function ExperienceBlock({ items }) {
  if (!items.length) return null;
  return items.map((item) => (
    <View key={item.id} style={styles.item}>
      <View style={styles.itemRow}>
        <View>
          <Text style={styles.itemTitle}>{item.role}</Text>
          <Text style={styles.itemSub}>{[item.company, item.location].filter(Boolean).join(' | ')}</Text>
        </View>
        <Text style={styles.itemSub}>{dateRange(item)}</Text>
      </View>
      {item.highlights?.length ? (
        <View style={styles.bullets}>
          {item.highlights.map((bullet, index) => (
            <Text key={`${item.id}-${index}`} style={styles.bullet}>- {bullet}</Text>
          ))}
        </View>
      ) : null}
    </View>
  ));
}

function EducationBlock({ items }) {
  if (!items.length) return null;
  return items.map((item) => (
    <View key={item.id} style={styles.item}>
      <View style={styles.itemRow}>
        <View>
          <Text style={styles.itemTitle}>{item.degree}</Text>
          <Text style={styles.itemSub}>{[item.institution, item.location].filter(Boolean).join(' | ')}</Text>
        </View>
        <Text style={styles.itemSub}>{dateRange(item)}</Text>
      </View>
      {item.details ? <Text style={styles.itemSub}>{item.details}</Text> : null}
    </View>
  ));
}

function ProjectBlock({ items }) {
  if (!items.length) return null;
  return items.map((item) => (
    <View key={item.id} style={styles.item}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      {item.role ? <Text style={styles.itemSub}>{item.role}</Text> : null}
      {item.summary ? <Text style={styles.itemSub}>{item.summary}</Text> : null}
    </View>
  ));
}

function TagBlock({ items, keyName = 'name' }) {
  if (!items.length) return null;
  return (
    <View style={styles.tags}>
      {items.map((item) => (
        <Text key={item.id} style={styles.tag}>{item[keyName]}{item.level ? ` | ${item.level}` : ''}{item.proficiency ? ` | ${item.proficiency}` : ''}</Text>
      ))}
    </View>
  );
}

function ClassicPdf({ resume }) {
  return (
    <>
      <ResumePdfSection title="Professional Summary">
        <Text style={styles.itemSub}>{resume.profile.summary}</Text>
      </ResumePdfSection>
      <ResumePdfSection title="Experience"><ExperienceBlock items={resume.experience} /></ResumePdfSection>
      <ResumePdfSection title="Education"><EducationBlock items={resume.education} /></ResumePdfSection>
      <ResumePdfSection title="Projects"><ProjectBlock items={resume.projects} /></ResumePdfSection>
      <ResumePdfSection title="Skills"><TagBlock items={resume.skills} /></ResumePdfSection>
    </>
  );
}

function SplitPdf({ resume, sidebarTitle = 'Skills' }) {
  return (
    <View style={styles.split}>
      <View style={styles.mainCol}>
        <ResumePdfSection title="Summary"><Text style={styles.itemSub}>{resume.profile.summary}</Text></ResumePdfSection>
        <ResumePdfSection title="Experience"><ExperienceBlock items={resume.experience} /></ResumePdfSection>
        <ResumePdfSection title="Projects"><ProjectBlock items={resume.projects} /></ResumePdfSection>
      </View>
      <View style={styles.sideCol}>
        <ResumePdfSection title={sidebarTitle}><TagBlock items={resume.skills} /></ResumePdfSection>
        <ResumePdfSection title="Education"><EducationBlock items={resume.education} /></ResumePdfSection>
        <ResumePdfSection title="Languages"><TagBlock items={resume.languages} /></ResumePdfSection>
      </View>
    </View>
  );
}

function ExecutivePdf({ resume }) {
  return (
    <>
      <ResumePdfSection title="Executive Summary">
        <View style={styles.summaryBox}><Text style={styles.itemSub}>{resume.profile.summary}</Text></View>
      </ResumePdfSection>
      <ResumePdfSection title="Leadership Experience"><ExperienceBlock items={resume.experience} /></ResumePdfSection>
      <View style={styles.split}>
        <View style={styles.mainCol}><ResumePdfSection title="Core Skills"><TagBlock items={resume.skills} /></ResumePdfSection></View>
        <View style={styles.sideCol}><ResumePdfSection title="Education"><EducationBlock items={resume.education} /></ResumePdfSection></View>
      </View>
      <ResumePdfSection title="Projects"><ProjectBlock items={resume.projects} /></ResumePdfSection>
    </>
  );
}

function CreativePdf({ resume }) {
  return (
    <View style={styles.split}>
      <View style={styles.mainCol}>
        <View style={styles.card}>
          <ResumePdfSection title="Profile"><Text style={styles.itemSub}>{resume.profile.summary}</Text></ResumePdfSection>
        </View>
        <View style={styles.card}>
          <ResumePdfSection title="Experience"><ExperienceBlock items={resume.experience} /></ResumePdfSection>
        </View>
      </View>
      <View style={styles.sideCol}>
        <View style={styles.card}>
          <ResumePdfSection title="Skills"><TagBlock items={resume.skills} /></ResumePdfSection>
        </View>
        <View style={styles.card}>
          <ResumePdfSection title="Education"><EducationBlock items={resume.education} /></ResumePdfSection>
        </View>
      </View>
    </View>
  );
}

export function ResumePdfDocument({ resume, templateId }) {
  const contacts = [resume.profile.email, resume.profile.phone, resume.profile.location, resume.profile.linkedin, resume.profile.website].filter(Boolean).join(' | ');
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{[resume.profile.firstName, resume.profile.lastName].filter(Boolean).join(' ') || 'Your Name'}</Text>
          {resume.profile.headline ? <Text style={styles.headline}>{resume.profile.headline}</Text> : null}
          {contacts ? <Text style={styles.contact}>{contacts}</Text> : null}
        </View>
        {templateId === 'professional' ? <SplitPdf resume={resume} /> : null}
        {templateId === 'elegant' ? <ClassicPdf resume={resume} /> : null}
        {templateId === 'modern' ? <SplitPdf resume={resume} /> : null}
        {templateId === 'minimalist' ? <ClassicPdf resume={resume} /> : null}
        {templateId === 'creative' ? <CreativePdf resume={resume} /> : null}
        {templateId === 'executive' ? <ExecutivePdf resume={resume} /> : null}
        {templateId === 'bold' ? <CreativePdf resume={resume} /> : null}
        {templateId === 'classic' ? <ClassicPdf resume={resume} /> : null}
        {templateId === 'clean' ? <ClassicPdf resume={resume} /> : null}
        {templateId === 'sophisticated' ? <ExecutivePdf resume={resume} /> : null}
      </Page>
    </Document>
  );
}

