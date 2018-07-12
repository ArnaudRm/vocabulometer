import React from 'react'
import {View} from 'react-native';
import {
    BarChart,
    Grid,
    YAxis,
    XAxis,
} from 'react-native-svg-charts';

class WordsBarChart extends React.PureComponent {

    render() {

        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 };
        const xAxisHeight = 30;

        return (
            <View style={{ height: 200, padding: 20, flexDirection: 'row', backgroundColor: 'white'}}>
                <YAxis
                    data={this.props.data}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <BarChart
                        style={{ flex: 1 }}
                        data={this.props.data}
                        spacingInner={0.2}
                        contentInset={verticalContentInset}
                        svg={{ fill: 'rgb(111, 185, 143)' }}
                    >
                        <Grid/>
                    </BarChart>
                    <XAxis
                        data={this.props.dates}
                        formatLabel={(value, index) => this.props.dates[index].toLocaleDateString('fr-FR') }
                        contentInset={{ top:10 , left: 30, right: 30}}
                        svg={{
                            fontSize: 8,
                            fontWeight: 'bold',
                            rotation: 15,
                            originY: 15,
                            y: 5,
                        }}
                        style={{
                            marginTop:8,
                            height: xAxisHeight,
                        }}
                        stackSize={7}
                    />
                </View>
            </View>
        )
    }
}

export default WordsBarChart;
