import React, { CSSProperties } from 'react';
import logo from '../../svg/logo.svg';

const styles: {[className: string]: CSSProperties} = {
    logo: {
        width: '20vw',
    }
}

interface OwnProps {
    pageName: string;
}

type Props = OwnProps;

function Header(props: Props) {
    return (
        <div>
            <img
              src={logo}
              style={styles.logo}
              alt="website logo"
            />
            <p>{props.pageName}</p>

        </div>
    )
}

export default Header;