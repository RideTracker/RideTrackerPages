export function PhoneImage(props) {
    const { children, style } = props;

    return (
        <div style={{
            display: "inline-block",

            borderStyle: "solid",
            borderRadius: 32,
            borderWidth: 7,
            borderColor: "transparent",
            
            boxShadow: "1px 3px 26px -4px rgba(0, 0, 0, .5)",
            boxSizing: "border-box",
            
            opacity: .95,

            overflow: "hidden",

            ...style
        }}>
            {children}
        </div>
    );
};
