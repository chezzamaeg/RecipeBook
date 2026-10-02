import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff8f0' },
  centered: { flex: 1, padding: 20, backgroundColor: '#fff8f0', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#3b2a1a', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#6b5844', textAlign: 'center', marginBottom: 24 },
  button: { backgroundColor: '#c2571a', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, marginTop: 12 },
  buttonSecondary: { backgroundColor: '#6b5844' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600', textAlign: 'center' },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 10, marginBottom: 12, borderWidth: 1, borderColor: '#ecd9c6' },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#3b2a1a' },
  cardMeta: { fontSize: 14, color: '#6b5844', marginTop: 4 },
  body: { fontSize: 16, lineHeight: 24, color: '#3b2a1a', marginTop: 12 },
});