import {colors} from '../../styles/variables'

const Statblock = (props) => (
    <section className="stat-block-wrap">
        {props.stats.map((stat, i) => (
            <div key={i} className='stat-block'>
                <p className="stat-block-name">
                    { stat.statistic ? stat.statistic.name : null }
                    { stat.attribute && stat.attribute.name ? stat.attribute.name : null }
                </p>
                <span className="stat-block-number">
                    { stat.value ? stat.value : `&ndash;` }
                </span>
                <span className="stat-block-metric">
                    { stat.attribute && stat.attribute.metric_name ? stat.attribute.metric_name : null }
                </span>
            </div>
        ))}
        {/* styles */}
        <style jsx>{`
        .stat-block-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .stat-block-wrap > div:first-child {
            margin-left: 0;
        }
        .stat-block-wrap > div:last-child {
            margin-right: 0;
        }
        .stat-block {
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0.5rem;
            background: ${colors.greyLight};
            margin: 0 0.25rem;
        }
        .stat-block-name {
            margin-bottom: 0;
        }
        .stat-block-number {
            font-weight: 700;
            font-size: 2rem;
            line-height: 2rem;
            margin-top: 0.25rem;
        }
        .stat-block-metric {
            font-size: 0.875rem;
        }
        `}</style>
    </section>
)

export default Statblock