import { useYear } from '../../hooks/useYear'
import { scrollToSection } from '../../utils/scrollUtils'

const Footer = () => {
  const yearRef = useYear()

  const handleFooterClick = (e, sectionId) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-mark">J</span>
            <span className="logo-text">Jumantik</span>
          </div>
          <p>
            Informasi edukatif tentang Juru Pemantau Jentik dan upaya pencegahan Demam
            Berdarah Dengue (DBD) di lingkungan tempat tinggal.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Tentang</h4>
            <a href="#apa-itu" onClick={(e) => handleFooterClick(e, 'apa-itu')}>
              Apa itu Jumantik
            </a>
            <a href="#penyebab" onClick={(e) => handleFooterClick(e, 'penyebab')}>
              Penyebab Jentik
            </a>
            <a
              href="#pencegahan"
              onClick={(e) => handleFooterClick(e, 'pencegahan')}
            >
              Pencegahan
            </a>
          </div>
          <div>
            <h4>Dukungan</h4>
            <a href="#peran" onClick={(e) => handleFooterClick(e, 'peran')}>
              Peran Jumantik
            </a>
            <a href="#faq" onClick={(e) => handleFooterClick(e, 'faq')}>
              FAQ
            </a>
          </div>
        </div>
        <div className="footer-note">
          <p>
            © <span ref={yearRef}></span> Edukasi Jumantik. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

