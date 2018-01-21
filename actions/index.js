import { OPEN_HOSPITAL } from './types';

export function openHospitalScreen(hospital) {
	return {
		payload: hospital,
		type: OPEN_HOSPITAL
	};
}
