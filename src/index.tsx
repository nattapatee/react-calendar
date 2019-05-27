import React from "react"
import { render } from "react-dom";
import { CalendarInlineExample } from "./calendar/C";
import { DateRangeType } from "office-ui-fabric-react/lib/Calendar";


class App extends React.Component {

    public render() {
        return (
            <div>
                <CalendarInlineExample
                    dateRangeType={DateRangeType.Day}
                    showGoToToday={true}
                    showNavigateButtons={false}
                    autoNavigateOnSelection={true} />
            </div>
        )
    }
}

var el = document.getElementById("root")

render(<App />, el)