import React from "react";
import { AddressForm } from "@/checkout/components/AddressForm";
import { FormProvider } from "@/checkout/hooks/useForm/FormProvider";
import { useAvailableShippingCountries } from "@/checkout/hooks/useAvailableShippingCountries";
import { useGuestShippingAddressForm } from "@/checkout/sections/GuestShippingAddressSection/useGuestShippingAddressForm";

export const GuestShippingAddressSection = () => {
	const { availableShippingCountries } = useAvailableShippingCountries();

	const form = useGuestShippingAddressForm();

	const { handleChange, handleBlur } = form;

	return (
		<FormProvider form={form}>
			<AddressForm
				title="Contact address"
				availableCountries={availableShippingCountries}
				fieldProps={{
					onChange: handleChange,
					onBlur: handleBlur,
				}}
			/>
			<span className="text-xs text-neutral-700">
				Embroidery order 🧵: specify the words here (example: <i>A. Forger</i>).
				<br />
				If multiple embroidery orders, specify <u>the size and the words</u> for each (
				<i>SM: A. Forger, 3XL: B. Forger</i>).
			</span>
		</FormProvider>
	);
};
