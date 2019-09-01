// Section6.js

const Section6 = ({ current, titles, onChangeOdjel }) => {
    // console.log('TCL: current, titles', current, titles);
    // const titles = props.data;

    const changeOdjel = value => onChangeOdjel(value);

    return (
        <section class="container m-t-xs-20-xl-40 section-6">
            {titles.map((title, index) => {
                return (
                    <div
                        class={`header-3 m-0 w3-card-4 menu-item${
                            current == index ? ' active' : ''
                        }`}
                        key={index}
                        onClick={() => changeOdjel(index)}
                    >
                        {title}
                    </div>
                );
            })}
        </section>
    );
};

export default Section6;
