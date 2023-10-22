import {Component} from "react";

class ProgressBar extends Component<{
    current: any,
    total: any
}> {
    render() {
        let {current, total} = this.props;
        const percent = (current / total) * 100;
        return (
            <div>
                <div
                    style={{
                        width: `${percent}%`,
                        height: '20px',
                        backgroundColor: 'blue',
                    }}
                />
            </div>
        );
    }
}

export default ProgressBar;
