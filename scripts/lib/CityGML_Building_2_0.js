var CityGML_Building_2_0_Module_Factory = function () {
  var CityGML_Building_2_0 = {
    n: 'CityGML_Building_2_0',
    dens: 'http:\/\/www.opengis.net\/citygml\/building\/2.0',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['GML_3_1_1', 'XLink_1_0', 'CityGML_2_0'],
    tis: [{
        ln: 'BuildingPartType',
        bti: '.AbstractBuildingType',
        ps: [{
            n: 'genericApplicationPropertyOfBuildingPart',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBuildingPart',
            ti: 'AnyType'
          }]
      }, {
        ln: 'AbstractBuildingType',
        bti: 'CityGML_2_0.AbstractSiteType',
        ps: [{
            n: 'clazz',
            en: 'class',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'function',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'usage',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'yearOfConstruction',
            ti: 'Calendar'
          }, {
            n: 'yearOfDemolition',
            ti: 'Calendar'
          }, {
            n: 'roofType',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'measuredHeight',
            ti: 'GML_3_1_1.LengthType'
          }, {
            n: 'storeysAboveGround',
            ti: 'Integer'
          }, {
            n: 'storeysBelowGround',
            ti: 'Integer'
          }, {
            n: 'storeyHeightsAboveGround',
            ti: 'GML_3_1_1.MeasureOrNullListType'
          }, {
            n: 'storeyHeightsBelowGround',
            ti: 'GML_3_1_1.MeasureOrNullListType'
          }, {
            n: 'lod0FootPrint',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod0RoofEdge',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod1Solid',
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'lod1MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod1TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod2Solid',
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'lod2MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod2MultiCurve',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod2TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'outerBuildingInstallation',
            mno: 0,
            col: true,
            ti: '.BuildingInstallationPropertyType'
          }, {
            n: 'interiorBuildingInstallation',
            mno: 0,
            col: true,
            ti: '.IntBuildingInstallationPropertyType'
          }, {
            n: 'cityObjectBoundedBy',
            mno: 0,
            col: true,
            en: 'boundedBy',
            ti: '.BoundarySurfacePropertyType'
          }, {
            n: 'lod3Solid',
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'lod3MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod3MultiCurve',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod3TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod4Solid',
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'lod4MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod4MultiCurve',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod4TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'interiorRoom',
            mno: 0,
            col: true,
            ti: '.InteriorRoomPropertyType'
          }, {
            n: 'consistsOfBuildingPart',
            mno: 0,
            col: true,
            ti: '.BuildingPartPropertyType'
          }, {
            n: 'address',
            mno: 0,
            col: true,
            ti: 'CityGML_2_0.AddressPropertyType'
          }, {
            n: 'genericApplicationPropertyOfAbstractBuilding',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfAbstractBuilding',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BuildingInstallationPropertyType',
        ps: [{
            n: 'buildingInstallation',
            rq: true,
            en: 'BuildingInstallation',
            ti: '.BuildingInstallationType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'InteriorFurniturePropertyType',
        ps: [{
            n: 'buildingFurniture',
            rq: true,
            en: 'BuildingFurniture',
            ti: '.BuildingFurnitureType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'CeilingSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfCeilingSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfCeilingSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BuildingFurnitureType',
        bti: 'CityGML_2_0.AbstractCityObjectType',
        ps: [{
            n: 'clazz',
            en: 'class',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'function',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'usage',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'lod4Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod4ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'genericApplicationPropertyOfBuildingFurniture',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBuildingFurniture',
            ti: 'AnyType'
          }]
      }, {
        ln: 'IntBuildingInstallationType',
        bti: 'CityGML_2_0.AbstractCityObjectType',
        ps: [{
            n: 'clazz',
            en: 'class',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'function',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'usage',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'lod4Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod4ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'cityObjectBoundedBy',
            mno: 0,
            col: true,
            en: 'boundedBy',
            ti: '.BoundarySurfacePropertyType'
          }, {
            n: 'genericApplicationPropertyOfIntBuildingInstallation',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfIntBuildingInstallation',
            ti: 'AnyType'
          }]
      }, {
        ln: 'OuterCeilingSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfOuterCeilingSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfOuterCeilingSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'IntBuildingInstallationPropertyType',
        ps: [{
            n: 'intBuildingInstallation',
            rq: true,
            en: 'IntBuildingInstallation',
            ti: '.IntBuildingInstallationType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'InteriorWallSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfInteriorWallSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfInteriorWallSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'WindowType',
        bti: '.AbstractOpeningType',
        ps: [{
            n: 'genericApplicationPropertyOfWindow',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfWindow',
            ti: 'AnyType'
          }]
      }, {
        ln: 'FloorSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfFloorSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfFloorSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'AbstractBoundarySurfaceType',
        bti: 'CityGML_2_0.AbstractCityObjectType',
        ps: [{
            n: 'lod2MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod3MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod4MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'opening',
            mno: 0,
            col: true,
            ti: '.OpeningPropertyType'
          }, {
            n: 'genericApplicationPropertyOfBoundarySurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBoundarySurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BuildingInstallationType',
        bti: 'CityGML_2_0.AbstractCityObjectType',
        ps: [{
            n: 'clazz',
            en: 'class',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'function',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'usage',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'lod2Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod3Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod4Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod2ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'lod3ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'lod4ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'cityObjectBoundedBy',
            mno: 0,
            col: true,
            en: 'boundedBy',
            ti: '.BoundarySurfacePropertyType'
          }, {
            n: 'genericApplicationPropertyOfBuildingInstallation',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBuildingInstallation',
            ti: 'AnyType'
          }]
      }, {
        ln: 'ClosureSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfClosureSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfClosureSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'InteriorRoomPropertyType',
        ps: [{
            n: 'room',
            rq: true,
            en: 'Room',
            ti: '.RoomType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'BuildingPartPropertyType',
        ps: [{
            n: 'buildingPart',
            rq: true,
            en: 'BuildingPart',
            ti: '.BuildingPartType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'OpeningPropertyType',
        ps: [{
            n: 'opening',
            rq: true,
            mx: false,
            dom: false,
            en: '_Opening',
            ti: '.AbstractOpeningType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DoorType',
        bti: '.AbstractOpeningType',
        ps: [{
            n: 'address',
            mno: 0,
            col: true,
            ti: 'CityGML_2_0.AddressPropertyType'
          }, {
            n: 'genericApplicationPropertyOfDoor',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfDoor',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BuildingType',
        bti: '.AbstractBuildingType',
        ps: [{
            n: 'genericApplicationPropertyOfBuilding',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBuilding',
            ti: 'AnyType'
          }]
      }, {
        ln: 'RoofSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfRoofSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfRoofSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'GroundSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfGroundSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfGroundSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BoundarySurfacePropertyType',
        ps: [{
            n: 'boundarySurface',
            rq: true,
            mx: false,
            dom: false,
            en: '_BoundarySurface',
            ti: '.AbstractBoundarySurfaceType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'OuterFloorSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfOuterFloorSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfOuterFloorSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'RoomType',
        bti: 'CityGML_2_0.AbstractCityObjectType',
        ps: [{
            n: 'clazz',
            en: 'class',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'function',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'usage',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'lod4Solid',
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'lod4MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'cityObjectBoundedBy',
            mno: 0,
            col: true,
            en: 'boundedBy',
            ti: '.BoundarySurfacePropertyType'
          }, {
            n: 'interiorFurniture',
            mno: 0,
            col: true,
            ti: '.InteriorFurniturePropertyType'
          }, {
            n: 'roomInstallation',
            mno: 0,
            col: true,
            ti: '.IntBuildingInstallationPropertyType'
          }, {
            n: 'genericApplicationPropertyOfRoom',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfRoom',
            ti: 'AnyType'
          }]
      }, {
        ln: 'AbstractOpeningType',
        bti: 'CityGML_2_0.AbstractCityObjectType',
        ps: [{
            n: 'lod3MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod4MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod3ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'lod4ImplicitRepresentation',
            ti: 'CityGML_2_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'genericApplicationPropertyOfOpening',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfOpening',
            ti: 'AnyType'
          }]
      }, {
        ln: 'WallSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfWallSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfWallSurface',
            ti: 'AnyType'
          }]
      }],
    eis: [{
        en: '_GenericApplicationPropertyOfIntBuildingInstallation',
        ti: 'AnyType'
      }, {
        en: 'ClosureSurface',
        ti: '.ClosureSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: 'FloorSurface',
        ti: '.FloorSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: 'WallSurface',
        ti: '.WallSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: 'IntBuildingInstallation',
        ti: '.IntBuildingInstallationType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: 'GroundSurface',
        ti: '.GroundSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: '_GenericApplicationPropertyOfDoor',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfWindow',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfBoundarySurface',
        ti: 'AnyType'
      }, {
        en: 'BuildingFurniture',
        ti: '.BuildingFurnitureType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: '_GenericApplicationPropertyOfOpening',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfFloorSurface',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfBuilding',
        ti: 'AnyType'
      }, {
        en: 'Room',
        ti: '.RoomType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: '_GenericApplicationPropertyOfAbstractBuilding',
        ti: 'AnyType'
      }, {
        en: 'Window',
        ti: '.WindowType',
        sh: '_Opening'
      }, {
        en: '_Opening',
        ti: '.AbstractOpeningType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: '_GenericApplicationPropertyOfRoom',
        ti: 'AnyType'
      }, {
        en: 'OuterFloorSurface',
        ti: '.OuterFloorSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: 'BuildingPart',
        ti: '.BuildingPartType',
        sh: '_AbstractBuilding'
      }, {
        en: '_GenericApplicationPropertyOfBuildingFurniture',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfGroundSurface',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfRoofSurface',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfCeilingSurface',
        ti: 'AnyType'
      }, {
        en: 'Building',
        ti: '.BuildingType',
        sh: '_AbstractBuilding'
      }, {
        en: '_GenericApplicationPropertyOfBuildingPart',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfClosureSurface',
        ti: 'AnyType'
      }, {
        en: 'BuildingInstallation',
        ti: '.BuildingInstallationType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: '_GenericApplicationPropertyOfOuterCeilingSurface',
        ti: 'AnyType'
      }, {
        en: 'RoofSurface',
        ti: '.RoofSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: '_GenericApplicationPropertyOfWallSurface',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfBuildingInstallation',
        ti: 'AnyType'
      }, {
        en: 'OuterCeilingSurface',
        ti: '.OuterCeilingSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: 'InteriorWallSurface',
        ti: '.InteriorWallSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: '_AbstractBuilding',
        ti: '.AbstractBuildingType',
        sh: {
          lp: '_Site',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: 'Door',
        ti: '.DoorType',
        sh: '_Opening'
      }, {
        en: '_GenericApplicationPropertyOfOuterFloorSurface',
        ti: 'AnyType'
      }, {
        en: 'CeilingSurface',
        ti: '.CeilingSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: '_BoundarySurface',
        ti: '.AbstractBoundarySurfaceType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: '_GenericApplicationPropertyOfInteriorWallSurface',
        ti: 'AnyType'
      }]
  };
  return {
    CityGML_Building_2_0: CityGML_Building_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], CityGML_Building_2_0_Module_Factory);
}
else {
  var CityGML_Building_2_0_Module = CityGML_Building_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.CityGML_Building_2_0 = CityGML_Building_2_0_Module.CityGML_Building_2_0;
  }
  else {
    var CityGML_Building_2_0 = CityGML_Building_2_0_Module.CityGML_Building_2_0;
  }
}