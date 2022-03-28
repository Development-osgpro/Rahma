import React from 'react'
import { VictoryPie , VictorySharedEvents, VictoryBar, VictoryLabel } from "victory";

import { ReactComponent as HeroSvgicon7 } from '../Assets/svgs/all-icons/icon-07.svg'
import { ReactComponent as HeroSvgicon8 } from '../Assets/svgs/all-icons/newIcons-10.svg'
import { ReactComponent as HartIcon } from '../Assets/svgs/all-icons/donatehartIcon.svg'

const ChartComponent = () => {
    return (
        <>
            <div className='Chart'>
                <div className="container">
                    <div className='firstsection'>
                        <div className='allcampaigns'>
                            <div>
                                <HeroSvgicon7 />
                                <p>ALL CAMPAIGNS</p>
                                <span>1588</span>
                            </div>
                            <div className='text'>
                                <div>
                                    <p>FINISHED</p>
                                    <p>1588</p>
                                </div>
                                <div>
                                    <p>ONGOING</p>
                                    <p>1588</p>
                                </div>
                            </div>
                        </div>
                        <div className='allcampaigns'>
                            <div>
                                <HeroSvgicon8 />
                                <p>ALL CAMPAIGNS</p>
                                <span>1588</span>
                            </div>
                            <div className='text'>
                                <div>
                                    <p>FINISHED</p>
                                    <p>1588</p>
                                </div>
                                <div>
                                    <p>ONGOING</p>
                                    <p>1588</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chartcontainer">
                        <div className='chartitself'>
                            <h4>Our Efficiency</h4>
                        <svg viewBox="0 0 450 350">
                            <VictorySharedEvents
                                events={[{
                                childName: ["pie", "bar"],
                                target: "data",
                                eventHandlers: {
                                    onMouseOver: () => {
                                    return [{
                                        childName: ["pie", "bar"],
                                        mutation: (props) => {
                                        return {
                                            style: Object.assign({}, props.style, {fill: "tomato"})
                                        };
                                        }
                                    }];
                                    },
                                    onMouseOut: () => {
                                    return [{
                                        childName: ["pie", "bar"],
                                        mutation: () => {
                                        return null;
                                        }
                                    }];
                                    }
                                }
                                }]}
                            >
                                {/* <g transform={"translate(150, 50)"}>
                                <VictoryBar name="bar"
                                    width={300}
                                    standalone={false}
                                    style={{
                                    data: { width: 20 },
                                    labels: {fontSize: 25}
                                    }}
                                    data={[
                                    {x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}, {x: "d", y: 4}
                                    ]}
                                    labels={["a", "b", "c", "d"]}
                                    labelComponent={<VictoryLabel y={290}/>}
                                />
                                </g> */}
                                <g transform={"translate(0, -75)"}>
                                <VictoryPie name="pie"
                                    width={250}
                                    standalone={false}
                                    style={{ labels: {fontSize: 25, padding: 10}}}
                                    data={[
                                        {x: "Program Services", y: 1}, {x: "Mangment & General", y: 4}, {x: "Fundraising", y: 5}
                                    ]}
                                />
                                </g>
                            </VictorySharedEvents>
                            </svg>
                        </div>
                        <div className='chartinfo'>
                            <div className='ProgramServices'>
                                <figure></figure>
                                <b>87%</b>
                                <p>Program Services</p>
                            </div>
                            <div className='MangmentGeneral'>
                                <figure></figure>
                                <b>8%</b>
                                <p>Mangment & General</p>
                            </div>
                            <div className="Fundraising">
                                <figure></figure>
                                <b>5%</b>
                                <p>Fundraising</p>
                            </div>
                            <button>Donate <HartIcon /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChartComponent