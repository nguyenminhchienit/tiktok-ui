import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => {
            return <MenuItem data={item} key={index}></MenuItem>;
        });
    };
    return (
        <Tippy
            delay={(0, 800)}
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{renderItem()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
