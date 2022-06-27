export interface NavbarType {
    buildingnavData: BuildingType,
    selectedRoomType?: string | null
    Data?:Object|undefined
    

}

export interface BuildingType {
    BuildingType: {
        Name: string;
        RoomTypes: Array<RoomTypes>
        DefaultRoom: string
    }
}

type RoomTypes = {
    Room: {
        Name: string,
        RoomTypes: Array<{
            RoomType: {
                Name: string,
                Cameras: number,
                Components: Array<{
                    Name: string,
                    Image: string,
                    Interaction: string
                }>
            }
        }>
        DefaultRoomType: string
        // Cameras:Array<{
        //     CameraIndex:number
        // }>
    }
}

export interface RoomTypeData {
    RoomType: {
        Name: string,
        Cameras: number,
        Components: Array<{
            Name: string,
            Image: string,
            Interaction: string
        }>
    }
}

export interface RoomListData {
    Room: {
        DefaultRoomType: string;
        Name: string;
        RoomTypes: Array<{
            RoomType: {
                Cameras: number;
                Components: Array<{
                    Name: string,
                    Image: string,
                    Interaction: string
                }>;
                Name: string;
            }
        }>
        // Cameras:Array<{
        //     CameraIndex:number
        // }>
    }
}
