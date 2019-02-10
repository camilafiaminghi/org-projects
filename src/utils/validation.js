export function validationRules (name, value) {
	const rule = {
		search: !!value.trim() && value.length > 3
	}
	return rule[name]
}

export function isValid (form) {
	return Object.keys(form).every(function (key) {
		return form[key]
	});
}
