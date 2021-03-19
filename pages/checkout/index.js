import MainLayout from '../../layouts/MainLayout'
import CustomerDataField from '../../components/CustomerDataField'
import classnames from './Checkout.module.scss'

const Checkout = () => {
	return (
		<MainLayout className={classnames['main--checkout']}>
			<CustomerDataField />
		</MainLayout>
	)
}

export default Checkout