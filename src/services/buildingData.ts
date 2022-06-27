import React from "react";

export const BuildingsData = () => {

    const AllBuildingData = {
        "BuildingList": [
            {
                "BuildingType":
                {
                    "Name": "BasicBuilding",
                    "RoomTypes": [
                        {
                            "Room":
                            {
                                "Name": "RoomA",
                                "RoomTypes": [
                                    {
                                        "RoomType":
                                        {
                                            "Name": "Large",
                                            "Cameras": 2,
                                            "Components": []
                                        }
                                    },
                                    {
                                        "RoomType":
                                        {
                                            "Name": "Small",
                                            "Cameras": 2,
                                            "Components": []
                                        }
                                    }
                                ],
                                "DefaultRoomType": "Small",
                                "Cameras": [
                                    {
                                    "CameraIndex": 1
                                   },
                                      {
                                       "CameraIndex": 2
                                         },
                                      ]
                            }
                        },
                        {
                            "Room":
                            {
                                "Name": "RoomB",
                                "RoomTypes": [
                                    {
                                        "RoomType":
                                        {
                                            "Name": "Empty",
                                            "Cameras": 1,
                                            "Components": []
                                        }
                                    }
                                ],
                                "DefaultRoomType": "Empty",
                                "Cameras": [
                                    {
                                    "CameraIndex": 1
                                   },
                                      ]
                            }
                        },
                        {
                            "Room":
                            {
                                "Name": "RoomC",
                                "RoomTypes": [
                                    {
                                        "RoomType":
                                        {
                                            "Name": "Empty",
                                            "Cameras": 1,
                                            "Components": []
                                        }
                                    }
                                ],
                                "DefaultRoomType": "Empty",
                                "Cameras": [
                                              {
                                              "CameraIndex": 1
                                             },
                                                ]
                            }
                        },
                        {
                            "Room":
                            {
                                "Name": "RoomD",
                                "RoomTypes": [
                                    {
                                        "RoomType":
                                        {
                                            "Name": "Empty",
                                            "Cameras": 1,
                                            "Components": []
                                        }
                                    }
                                ],
                                "DefaultRoomType": "Empty",
                                "Cameras": [
                                    {
                                    "CameraIndex": 1
                                   }
                                      ]
                            }
                        }
                    ],
                    "DefaultRoom": "RoomA"
                }
            }
        ]
    
    //     "BuildingList": [
    //         {
    //             "BuildingType":
    //             {
    //                 "Name": "3BHK_Basic",
    //                 "RoomTypes": [
    //                     {
    //                         "Room":
    //                         {
    //                             "Name": "MasterBedRoom",
    //                             "RoomTypes": [
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "Contemporary_Suite",
    //                                         "Cameras": 3,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Bed",
    //                                                 "Image": "BedImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Cupboard",
    //                                                 "Image": "CupboardImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Lights",
    //                                                 "Image": "LightImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "Bohemian_Suite",
    //                                         "Cameras": 4,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Bed",
    //                                                 "Image": "BedImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Cupboard",
    //                                                 "Image": "CupboardImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Lights",
    //                                                 "Image": "LightImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "ModernMarvel",
    //                                         "Cameras": 4,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Bed",
    //                                                 "Image": "BedImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Cupboard",
    //                                                 "Image": "CupboardImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Lights",
    //                                                 "Image": "LightImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 }
    //                             ],
    //                             "DefaultRoomType": "Contemporary_Suite",
    //                             "Cameras": [
    //                                 {
    //                                     "CameraIndex": 1
    //                                 },
    //                                 {
    //                                     "CameraIndex": 2
    //                                 },
    //                                 {
    //                                     "CameraIndex": 3
    //                                 },
    //                                 {
    //                                     "CameraIndex": 4
    //                                 },
    //                                 {
    //                                     "CameraIndex": 5
    //                                 },
    //                                 {
    //                                     "CameraIndex": 6
    //                                 },
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "Room":
    //                         {
    //                             "Name": "GuestRoom",
    //                             "RoomTypes": [
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "Contemporary_Suite",
    //                                         "Cameras": 4,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Bed",
    //                                                 "Image": "BedImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Cupboard",
    //                                                 "Image": "CupboardImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Lights",
    //                                                 "Image": "LightImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "GuestBedroom",
    //                                         "Cameras": 3,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Bed",
    //                                                 "Image": "BedImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Cupboard",
    //                                                 "Image": "CupboardImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Lights",
    //                                                 "Image": "LightImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "Mini-Office",
    //                                         "Cameras": 4,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Workstation",
    //                                                 "Image": "WorkstationImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Cupboard",
    //                                                 "Image": "CupboardImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Lights",
    //                                                 "Image": "LightImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 }
    //                             ],
    //                             "DefaultRoomType": "Mini-Office",
    //                             "Cameras": [
    //                                 {
    //                                     "CameraIndex": 1
    //                                 },
    //                                 {
    //                                     "CameraIndex": 2
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "Room":
    //                         {
    //                             "Name": "LivingRoom",
    //                             "RoomTypes": [
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "MordenArt Deco",
    //                                         "Cameras": 3,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Table",
    //                                                 "Image": "TableImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Sofa",
    //                                                 "Image": "SofaImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Decoration",
    //                                                 "Image": "DecorationImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "Contemporary",
    //                                         "Cameras": 4,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Table",
    //                                                 "Image": "TableImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Sofa",
    //                                                 "Image": "SofaImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Decoration",
    //                                                 "Image": "DecorationImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 }
    //                             ],
    //                             "DefaultRoomType": "MordenArt Deco",
    //                             "Cameras": [
    //                                 {
    //                                     "CameraIndex": 1
    //                                 },
    //                                 {
    //                                     "CameraIndex": 2
    //                                 },
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "Room":
    //                         {
    //                             "Name": "Kitchen",
    //                             "RoomTypes": [
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "WoodRush",
    //                                         "Cameras": 3,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Chimney",
    //                                                 "Image": "ChimneyImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Counter",
    //                                                 "Image": "CounterImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "MarbelMarvel",
    //                                         "Cameras": 4,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Table",
    //                                                 "Image": "TableImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Sofa",
    //                                                 "Image": "SofaImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Decoration",
    //                                                 "Image": "DecorationImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 }
    //                             ],
    //                             "DefaultRoomType": "WoodRush",
    //                             "Cameras": [
    //                                 {
    //                                     "CameraIndex": 1
    //                                 },
    //                                 {
    //                                     "CameraIndex": 2
    //                                 },
    //                             ]
    //                         }
    //                     }
    //                 ],
    //                 "DefaultRoom": "LivingRoom"
    //             }
    //         },
    //         {
    //             "BuildingType":
    //             {
    //                 "Name": "2BHK_Premium",
    //                 "RoomTypes": [
    //                     {
    //                         "Room":
    //                         {
    //                             "Name": "ScandinavianBedroom",
    //                             "RoomTypes": [
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "ModernDeck",
    //                                         "Cameras": 3,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Bed",
    //                                                 "Image": "BedImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Cupboard",
    //                                                 "Image": "CupboardImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Lights",
    //                                                 "Image": "LightImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "Contemporary",
    //                                         "Cameras": 4,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Bed",
    //                                                 "Image": "BedImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Cupboard",
    //                                                 "Image": "CupboardImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Lights",
    //                                                 "Image": "LightImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 }
    //                             ],
    //                             "DefaultRoomType": "ModernDeck",
    //                             "Cameras": [
    //                                 {
    //                                     "CameraIndex": 1
    //                                 },
    //                                 {
    //                                     "CameraIndex": 2
    //                                 },
    //                                 {
    //                                     "CameraIndex": 3
    //                                 },
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "Room":
    //                         {
    //                             "Name": "GuestRoom",
    //                             "RoomTypes": [
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "Bohemian",
    //                                         "Cameras": 4,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Bed",
    //                                                 "Image": "BedImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Cupboard",
    //                                                 "Image": "CupboardImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Lights",
    //                                                 "Image": "LightImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "GuestBedroom",
    //                                         "Cameras": 3,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Bed",
    //                                                 "Image": "BedImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Cupboard",
    //                                                 "Image": "CupboardImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Lights",
    //                                                 "Image": "LightImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "Mini-Office",
    //                                         "Cameras": 4,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Workstation",
    //                                                 "Image": "WorkstationImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Cupboard",
    //                                                 "Image": "CupboardImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Lights",
    //                                                 "Image": "LightImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 }
    //                             ],
    //                             "DefaultRoomType": "Bohemian",
    //                             "Cameras": [
    //                                 {
    //                                     "CameraIndex": 1
    //                                 },
    //                                 {
    //                                     "CameraIndex": 2
    //                                 },
    //                                 {
    //                                     "CameraIndex": 3
    //                                 },
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "Room":
    //                         {
    //                             "Name": "ClassicLivingRoom",
    //                             "RoomTypes": [
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "Coastal",
    //                                         "Cameras": 3,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Table",
    //                                                 "Image": "TableImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Sofa",
    //                                                 "Image": "SofaImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Decoration",
    //                                                 "Image": "DecorationImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "Bohemian",
    //                                         "Cameras": 4,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Table",
    //                                                 "Image": "TableImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Sofa",
    //                                                 "Image": "SofaImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Decoration",
    //                                                 "Image": "DecorationImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 }
    //                             ],
    //                             "DefaultRoomType": "Coastal",
    //                             "Cameras": [
    //                                 {
    //                                     "CameraIndex": 1
    //                                 },
    //                                 {
    //                                     "CameraIndex": 2
    //                                 },
    //                                 {
    //                                     "CameraIndex": 3
    //                                 },
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "Room":
    //                         {
    //                             "Name": "ScandinavianKitchen",
    //                             "RoomTypes": [
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "WhiteDeco",
    //                                         "Cameras": 3,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Chimney",
    //                                                 "Image": "ChimneyImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Counter",
    //                                                 "Image": "CounterImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     "RoomType":
    //                                     {
    //                                         "Name": "Pearline",
    //                                         "Cameras": 4,
    //                                         "Components": [
    //                                             {
    //                                                 "Name": "Table",
    //                                                 "Image": "TableImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Sofa",
    //                                                 "Image": "SofaImage",
    //                                                 "Interaction": "Camera"
    //                                             },
    //                                             {
    //                                                 "Name": "Decoration",
    //                                                 "Image": "DecorationImage",
    //                                                 "Interaction": "Camera"
    //                                             }
    //                                         ]
    //                                     }
    //                                 }
    //                             ],
    //                             "DefaultRoomType": "WhiteDeco",
    //                             "Cameras": [
    //                                 {
    //                                     "CameraIndex": 1
    //                                 },
    //                                 {
    //                                     "CameraIndex": 2
    //                                 },
    //                                 {
    //                                     "CameraIndex": 3
    //                                 },
    //                                 {
    //                                     "CameraIndex": 4
    //                                 },
    //                             ]
    //                         }
    //                     }
    //                 ],
    //                 "DefaultRoom": "GuestRoom"
    //             }
    //         }
    //     ],
    //     "DefaultBuilding": "3BHK_Basic"
    }
    return AllBuildingData;
}

export const DefaultBuildingData = () => {
    const allBuildingJson:any = BuildingsData();
    let DefaultBuilding;
    allBuildingJson.BuildingList.forEach((Building:any) => {
        if (Building.BuildingType.Name === allBuildingJson.DefaultRoom) {
            DefaultBuilding = Building;
        }
    })
    return DefaultBuilding
}