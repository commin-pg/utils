/**
 * 숫자 콤마작업 (1000 -> 1,000)
 * @param number 
 * @returns 
 */
export const numberToComma = (number: number) => {
	if(number){
		let parts = number.toString().split("."); 
	return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : ""); 
	}else{
		return "";
	}
}
