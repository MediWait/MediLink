import { OPEN_HOSPITAL } from './types';

export function openHospitalScreen(hospital) {
	console.log(hospital);
	return {
		payload: hospital,
		type: OPEN_HOSPITAL
	};
}
