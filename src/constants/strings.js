export const monthNames = ["January", "February", "March", "April", 
"May", "June","July", "August", "September", "October", "November", "December"];

export const url = 'https://api.unsplash.com/photos?page=1&&client_id=NxO8brZWvNhX2mb15bi23yOwsD7dYLrgAJRD5khE21E';

export function updateDataAction({data}) {
    return {
        type: 'UpdateData',
        payload: {
            data
        }
    }
}