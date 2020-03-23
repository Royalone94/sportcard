import { Container } from 'reactstrap'
import { colors } from '../../styles/variables'

const SubNav = ({ children }) => (
    <nav className="subnav shadow">
      <Container>
        <div className="subnav-inner">
          {children}
        </div>
      </Container>
      {/* styles */}
      <style jsx>{`
      .subnav {
        background: ${ colors.white };
        margin-bottom: 2rem;
      }
      .subnav-inner {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: 4.5rem;
        padding-bottom: 1.5rem;
      }
      `}</style>
    </nav>
)

export default SubNav