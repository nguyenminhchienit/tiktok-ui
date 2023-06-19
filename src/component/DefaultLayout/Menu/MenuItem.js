import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../Button';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} icon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
