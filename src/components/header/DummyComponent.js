import React, { Fragment } from 'react'
const DummyComponent = {
    DatePicker: function DatePicker(props) {
        return <div>Imagine a {props.color} datepicker here.</div>;
    },
    RefEx : React.forwardRef((props, refs) => {
        console.log('jadu',refs);
        return (
            <Fragment>
                <div ref={refs} onClick={() => alert()}>
                    {props.someProp}
                    {/* write some code if you want i was just implementing forwarding reference */}
            </div>
            </Fragment>
        )
    })
}
export default DummyComponent;