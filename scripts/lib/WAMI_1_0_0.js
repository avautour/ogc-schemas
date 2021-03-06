var WAMI_1_0_0_Module_Factory = function () {
  var WAMI_1_0_0 = {
    n: 'WAMI_1_0_0',
    dens: 'http:\/\/www.pixia.com\/wami',
    deps: ['OWS_2_0'],
    tis: [{
        ln: 'CollectionMetadataSectionsType',
        ps: [{
            n: 'collection',
            en: 'Collection',
            ti: '.CollectionSectionType'
          }, {
            n: 'geoBox',
            en: 'GeoBox',
            ti: '.GeoBoxSectionType'
          }, {
            n: 'toa',
            en: 'TOA',
            ti: 'Calendar'
          }, {
            n: 'frameNum',
            en: 'FrameNum',
            ti: 'Integer'
          }, {
            n: 'file',
            en: 'File',
            ti: '.FileSectionType'
          }, {
            n: 'group',
            mno: 0,
            col: true,
            en: 'Group',
            ti: '.MetadataGroupType'
          }, {
            n: 'extendedMetadataSection',
            mno: 0,
            col: true,
            en: 'ExtendedMetadataSection',
            ti: '.ExtendedMetadataSection'
          }]
      }, {
        ln: 'FrameOrTimeRequestType',
        ps: [{
            n: 'frame',
            ti: 'Integer',
            an: {
              lp: 'frame'
            },
            t: 'a'
          }, {
            n: 'time',
            ti: 'Calendar',
            an: {
              lp: 'time'
            },
            t: 'a'
          }]
      }, {
        ln: 'ISInfoType',
        tn: 'IS_InfoType',
        bti: '.AbstractResponseType',
        ps: [{
            n: 'metadata',
            en: 'Metadata',
            ti: '.CollectionMetadataSectionsType'
          }]
      }, {
        ln: 'MultipartImageRootDocumentType',
        ps: [{
            n: 'reference',
            mno: 0,
            col: true,
            en: 'Reference',
            ti: '.MultipartImageRootDocumentType.Reference'
          }]
      }, {
        ln: 'GetHelpRequestType',
        bti: '.AbstractRequestType',
        ps: [{
            n: 'topic',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'topic'
            },
            t: 'a'
          }]
      }, {
        ln: 'ISMapInfoType',
        tn: 'IS_MapInfoType',
        bti: '.ISAbstractMapInfoType'
      }, {
        ln: 'RequestMethodLinkType',
        bti: 'OWS_2_0.RequestMethodType',
        ps: [{
            n: 'get',
            ti: 'Boolean',
            an: {
              lp: 'get'
            },
            t: 'a'
          }, {
            n: 'post',
            ti: 'Boolean',
            an: {
              lp: 'post'
            },
            t: 'a'
          }]
      }, {
        ln: 'VSGetMapVideoRequestType',
        tn: 'VS_GetMapVideoRequestType',
        bti: '.BinaryAbstractGetMapRequestType',
        ps: [{
            n: 'bBox',
            rq: true,
            en: 'BBox',
            ti: '.BoundBoxType'
          }, {
            n: 'time',
            rq: true,
            en: 'Time',
            ti: '.FrameOrTimeRangeRequestType'
          }, {
            n: 'cid',
            rq: true,
            ti: {
              t: 'l'
            },
            an: {
              lp: 'CID'
            },
            t: 'a'
          }, {
            n: 'styles',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'styles'
            },
            t: 'a'
          }, {
            n: 'bgcolor',
            an: {
              lp: 'bgcolor'
            },
            t: 'a'
          }, {
            n: 'transparent',
            ti: 'Boolean',
            an: {
              lp: 'transparent'
            },
            t: 'a'
          }, {
            n: 'dup',
            rq: true,
            ti: 'Integer',
            an: {
              lp: 'dup'
            },
            t: 'a'
          }]
      }, {
        ln: 'ISGetMapInfoRequestType',
        tn: 'IS_GetMapInfoRequestType',
        bti: '.CommonAbstractGetMapRequestType',
        ps: [{
            n: 'bBox',
            rq: true,
            en: 'BBox',
            ti: '.BoundBoxType'
          }, {
            n: 'time',
            rq: true,
            en: 'Time',
            ti: '.FrameOrTimeRangeRequestType'
          }, {
            n: 'cid',
            rq: true,
            ti: {
              t: 'l'
            },
            an: {
              lp: 'CID'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostContentTypeMetaData.XML',
        tn: null,
        ps: [{
            n: 'schemaElement',
            rq: true,
            an: {
              lp: 'schemaElement'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostContentTypeMetaData',
        tn: null,
        ps: [{
            n: 'kvp',
            en: 'KVP',
            ti: '.PostContentTypeMetaData.KVP'
          }, {
            n: 'xml',
            en: 'XML',
            ti: '.PostContentTypeMetaData.XML'
          }]
      }, {
        ln: 'FrameOrTimeRangeRequestType.TimeRange',
        tn: null,
        ps: [{
            n: 'start',
            ti: 'Calendar',
            an: {
              lp: 'start'
            },
            t: 'a'
          }, {
            n: 'end',
            ti: 'Calendar',
            an: {
              lp: 'end'
            },
            t: 'a'
          }, {
            n: 'step',
            ti: 'Double',
            an: {
              lp: 'step'
            },
            t: 'a'
          }]
      }, {
        ln: 'PathMapType',
        ps: [{
            n: 'track',
            rq: true,
            col: true,
            en: 'Track',
            ti: '.PathMapTrackType'
          }]
      }, {
        ln: 'CSCollectionCountType',
        tn: 'CS_CollectionCountType',
        bti: '.AbstractResponseType',
        ps: [{
            n: 'description',
            en: 'Description'
          }, {
            n: 'root',
            rq: true,
            ti: 'Boolean',
            an: {
              lp: 'root'
            },
            t: 'a'
          }, {
            n: 'depth',
            ti: 'Integer',
            an: {
              lp: 'depth'
            },
            t: 'a'
          }, {
            n: 'nid',
            rq: true,
            an: {
              lp: 'NID'
            },
            t: 'a'
          }, {
            n: 'childNodes',
            rq: true,
            ti: 'Integer',
            an: {
              lp: 'childNodes'
            },
            t: 'a'
          }, {
            n: 'totalNodes',
            rq: true,
            ti: 'Integer',
            an: {
              lp: 'totalNodes'
            },
            t: 'a'
          }, {
            n: 'collections',
            rq: true,
            ti: 'Integer',
            an: {
              lp: 'collections'
            },
            t: 'a'
          }, {
            n: 'edgeDepth',
            ti: 'Integer',
            an: {
              lp: 'edgeDepth'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetCapabilitiesRequestType',
        bti: '.CommonAbstractRequestType',
        ps: [{
            n: 'acceptVersions',
            rq: true,
            ti: {
              t: 'l'
            },
            an: {
              lp: 'acceptVersions'
            },
            t: 'a'
          }, {
            n: 'acceptFormats',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'acceptFormats'
            },
            t: 'a'
          }, {
            n: 'sections',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'sections'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'MultipartImageRootDocumentType.Reference',
        tn: null,
        ps: [{
            n: 'imageReference',
            an: {
              lp: 'imageReference'
            },
            t: 'a'
          }, {
            n: 'metadataReference',
            an: {
              lp: 'metadataReference'
            },
            t: 'a'
          }]
      }, {
        ln: 'PathMapTrackType',
        ps: [{
            n: 'aoi',
            rq: true,
            col: true,
            en: 'Aoi',
            ti: '.PathMapTrackAoiType'
          }, {
            n: 'cid',
            rq: true,
            ti: {
              t: 'l'
            },
            an: {
              lp: 'CID'
            },
            t: 'a'
          }, {
            n: 'method',
            an: {
              lp: 'method'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractResponseType',
        ps: [{
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'PathMapTrackAoiType',
        ps: [{
            n: 'bBox',
            rq: true,
            en: 'BBox',
            ti: '.BoundBoxType'
          }, {
            n: 'time',
            rq: true,
            en: 'Time',
            ti: '.FrameOrTimeRequestType'
          }, {
            n: 'timeSpan',
            en: 'TimeSpan',
            ti: '.FrameOrTimeSpanRequestType'
          }, {
            n: 'option',
            mno: 0,
            col: true,
            en: 'Option',
            ti: '.NameValuePairType'
          }]
      }, {
        ln: 'ISGetMapRequestType',
        tn: 'IS_GetMapRequestType',
        bti: '.BinaryAbstractGetMapRequestType',
        ps: [{
            n: 'bBox',
            rq: true,
            en: 'BBox',
            ti: '.BoundBoxType'
          }, {
            n: 'time',
            rq: true,
            en: 'Time',
            ti: '.FrameOrTimeRangeRequestType'
          }, {
            n: 'cid',
            rq: true,
            ti: {
              t: 'l'
            },
            an: {
              lp: 'CID'
            },
            t: 'a'
          }, {
            n: 'disposition',
            an: {
              lp: 'disposition'
            },
            t: 'a'
          }, {
            n: 'styles',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'styles'
            },
            t: 'a'
          }, {
            n: 'bgcolor',
            an: {
              lp: 'bgcolor'
            },
            t: 'a'
          }, {
            n: 'transparent',
            ti: 'Boolean',
            an: {
              lp: 'transparent'
            },
            t: 'a'
          }]
      }, {
        ln: 'ISPathMapType',
        tn: 'IS_PathMapType',
        bti: '.MultipartImageRootDocumentType'
      }, {
        ln: 'CSNodeType',
        tn: 'CS_NodeType',
        ps: [{
            n: 'description',
            en: 'Description'
          }, {
            n: 'service',
            mno: 0,
            col: true,
            en: 'Service',
            ti: '.NamedServiceElementType'
          }, {
            n: 'metadata',
            en: 'Metadata',
            ti: '.CollectionMetadataSectionsType'
          }, {
            n: 'node',
            mno: 0,
            col: true,
            en: 'Node',
            ti: '.CSNodeType'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'parentNID',
            an: {
              lp: 'parentNID'
            },
            t: 'a'
          }, {
            n: 'nid',
            rq: true,
            an: {
              lp: 'NID'
            },
            t: 'a'
          }, {
            n: 'cid',
            an: {
              lp: 'CID'
            },
            t: 'a'
          }]
      }, {
        ln: 'BoundBoxType',
        ps: [{
            n: 'crs',
            rq: true,
            an: {
              lp: 'crs'
            },
            t: 'a'
          }, {
            n: 'minx',
            rq: true,
            ti: 'Double',
            an: {
              lp: 'minx'
            },
            t: 'a'
          }, {
            n: 'miny',
            rq: true,
            ti: 'Double',
            an: {
              lp: 'miny'
            },
            t: 'a'
          }, {
            n: 'maxx',
            rq: true,
            ti: 'Double',
            an: {
              lp: 'maxx'
            },
            t: 'a'
          }, {
            n: 'maxy',
            rq: true,
            ti: 'Double',
            an: {
              lp: 'maxy'
            },
            t: 'a'
          }, {
            n: 'resx',
            ti: 'Double',
            an: {
              lp: 'resx'
            },
            t: 'a'
          }, {
            n: 'resy',
            ti: 'Double',
            an: {
              lp: 'resy'
            },
            t: 'a'
          }]
      }, {
        ln: 'FrameOrTimeSpanRequestType',
        ps: [{
            n: 'frames',
            ti: 'Integer',
            an: {
              lp: 'frames'
            },
            t: 'a'
          }, {
            n: 'duration',
            ti: 'Double',
            an: {
              lp: 'duration'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostContentTypeMetaData.KVP',
        tn: null
      }, {
        ln: 'FileSectionType',
        ps: [{
            n: 'geoTransform',
            en: 'GeoTransform',
            ti: '.GeoTransformType'
          }, {
            n: 'wkt',
            en: 'WKT'
          }, {
            n: 'boundingPolygon',
            mno: 0,
            col: true,
            en: 'BoundingPolygon',
            ti: '.BoundingPolygonType'
          }, {
            n: 'fileName',
            an: {
              lp: 'fileName'
            },
            t: 'a'
          }, {
            n: 'fileSize',
            ti: 'Integer',
            an: {
              lp: 'fileSize'
            },
            t: 'a'
          }, {
            n: 'createTime',
            ti: 'Calendar',
            an: {
              lp: 'createTime'
            },
            t: 'a'
          }, {
            n: 'modifyTime',
            ti: 'Calendar',
            an: {
              lp: 'modifyTime'
            },
            t: 'a'
          }, {
            n: 'pixelWidth',
            ti: 'Integer',
            an: {
              lp: 'pixelWidth'
            },
            t: 'a'
          }, {
            n: 'pixelHeight',
            ti: 'Integer',
            an: {
              lp: 'pixelHeight'
            },
            t: 'a'
          }, {
            n: 'fileFormat',
            an: {
              lp: 'fileFormat'
            },
            t: 'a'
          }, {
            n: 'bands',
            ti: 'Integer',
            an: {
              lp: 'bands'
            },
            t: 'a'
          }, {
            n: 'bitsPerBand',
            ti: 'Integer',
            an: {
              lp: 'bitsPerBand'
            },
            t: 'a'
          }, {
            n: 'bandDataType',
            an: {
              lp: 'bandDataType'
            },
            t: 'a'
          }]
      }, {
        ln: 'CSGetCollectionsRequestType',
        tn: 'CS_GetCollectionsRequestType',
        bti: '.AbstractRequestType',
        ps: [{
            n: 'nid',
            an: {
              lp: 'NID'
            },
            t: 'a'
          }, {
            n: 'depth',
            an: {
              lp: 'depth'
            },
            t: 'a'
          }, {
            n: 'metadata',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'metadata'
            },
            t: 'a'
          }]
      }, {
        ln: 'CollectionSectionType',
        ps: [{
            n: 'startFrame',
            ti: 'Integer',
            an: {
              lp: 'startFrame'
            },
            t: 'a'
          }, {
            n: 'endFrame',
            ti: 'Integer',
            an: {
              lp: 'endFrame'
            },
            t: 'a'
          }, {
            n: 'frameCount',
            ti: 'Integer',
            an: {
              lp: 'frameCount'
            },
            t: 'a'
          }, {
            n: 'startTime',
            ti: 'Calendar',
            an: {
              lp: 'startTime'
            },
            t: 'a'
          }, {
            n: 'endTime',
            ti: 'Calendar',
            an: {
              lp: 'endTime'
            },
            t: 'a'
          }, {
            n: 'timeSpan',
            ti: 'Double',
            an: {
              lp: 'timeSpan'
            },
            t: 'a'
          }, {
            n: 'frameInterval',
            ti: 'Double',
            an: {
              lp: 'frameInterval'
            },
            t: 'a'
          }, {
            n: 'frameJitter',
            ti: 'Double',
            an: {
              lp: 'frameJitter'
            },
            t: 'a'
          }]
      }, {
        ln: 'VSGetPathMapVideoRequestType',
        tn: 'VS_GetPathMapVideoRequestType',
        bti: '.BinaryAbstractGetMapRequestType',
        ps: [{
            n: 'path',
            rq: true,
            en: 'Path',
            ti: '.PathMapType'
          }, {
            n: 'styles',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'styles'
            },
            t: 'a'
          }, {
            n: 'bgcolor',
            an: {
              lp: 'bgcolor'
            },
            t: 'a'
          }, {
            n: 'transparent',
            ti: 'Boolean',
            an: {
              lp: 'transparent'
            },
            t: 'a'
          }, {
            n: 'dup',
            rq: true,
            ti: 'Integer',
            an: {
              lp: 'dup'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeoBoxSectionType',
        ps: [{
            n: 'boundingBox',
            mno: 0,
            col: true,
            en: 'BoundingBox',
            ti: '.BoundBoxType'
          }, {
            n: 'nativeCRS',
            an: {
              lp: 'nativeCRS'
            },
            t: 'a'
          }]
      }, {
        ln: 'NameValuePairType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractRequestType',
        bti: '.CommonAbstractRequestType',
        ps: [{
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'format',
            an: {
              lp: 'format'
            },
            t: 'a'
          }]
      }, {
        ln: 'CSCollectionsType',
        tn: 'CS_CollectionsType',
        bti: '.AbstractResponseType',
        ps: [{
            n: 'description',
            en: 'Description'
          }, {
            n: 'parent',
            en: 'Parent',
            ti: '.CSCollectionsType.Parent'
          }, {
            n: 'node',
            rq: true,
            en: 'Node',
            ti: '.CSNodeType'
          }]
      }, {
        ln: 'CSCollectionsType.Parent',
        tn: null,
        ps: [{
            n: 'service',
            rq: true,
            en: 'Service',
            ti: '.NamedServiceElementType'
          }, {
            n: 'nid',
            rq: true,
            an: {
              lp: 'NID'
            },
            t: 'a'
          }]
      }, {
        ln: 'CSGetCollectionCountRequestType',
        tn: 'CS_GetCollectionCountRequestType',
        bti: '.AbstractRequestType',
        ps: [{
            n: 'nid',
            an: {
              lp: 'NID'
            },
            t: 'a'
          }, {
            n: 'depth',
            an: {
              lp: 'depth'
            },
            t: 'a'
          }]
      }, {
        ln: 'BoundingPolygonType',
        ps: [{
            n: 'value',
            ti: {
              t: 'l',
              bti: 'Double'
            },
            t: 'v'
          }, {
            n: 'crs',
            rq: true,
            an: {
              lp: 'crs'
            },
            t: 'a'
          }]
      }, {
        ln: 'MetadataGroupType',
        ps: [{
            n: 'attribute',
            mno: 0,
            col: true,
            en: 'Attribute',
            ti: '.NameValuePairType'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'HelpResponseType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'request',
            rq: true,
            an: {
              lp: 'request'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'ISMapType',
        tn: 'IS_MapType',
        bti: '.MultipartImageRootDocumentType'
      }, {
        ln: 'CapabilitiesResponseBaseType',
        ps: [{
            n: 'serviceIdentification',
            en: {
              lp: 'ServiceIdentification',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.ServiceIdentification'
          }, {
            n: 'serviceProvider',
            en: {
              lp: 'ServiceProvider',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.ServiceProvider'
          }, {
            n: 'operationsMetadata',
            en: {
              lp: 'OperationsMetadata',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.OperationsMetadata'
          }, {
            n: 'language',
            mno: 0,
            col: true,
            en: 'Language'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'DimensionType',
        ps: [{
            n: 'width',
            rq: true,
            ti: 'Integer',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'height',
            rq: true,
            ti: 'Integer',
            an: {
              lp: 'height'
            },
            t: 'a'
          }]
      }, {
        ln: 'ISAbstractMapInfoType',
        tn: 'IS_AbstractMapInfoType',
        bti: '.AbstractResponseType',
        ps: [{
            n: 'metadata',
            rq: true,
            col: true,
            en: 'Metadata',
            ti: '.CollectionMetadataSectionsType'
          }]
      }, {
        ln: 'ISPathMapInfoType',
        tn: 'IS_PathMapInfoType',
        bti: '.ISAbstractMapInfoType'
      }, {
        ln: 'ISGetPathMapInfoRequestType',
        tn: 'IS_GetPathMapInfoRequestType',
        bti: '.CommonAbstractGetMapRequestType',
        ps: [{
            n: 'path',
            rq: true,
            en: 'Path',
            ti: '.PathMapType'
          }]
      }, {
        ln: 'ServiceElementType',
        ps: [{
            n: 'request',
            rq: true,
            col: true,
            en: 'Request',
            ti: '.RequestMethodLinkType'
          }]
      }, {
        ln: 'FrameOrTimeRangeRequestType',
        ps: [{
            n: 'frameRange',
            en: 'FrameRange',
            ti: '.FrameOrTimeRangeRequestType.FrameRange'
          }, {
            n: 'timeRange',
            en: 'TimeRange',
            ti: '.FrameOrTimeRangeRequestType.TimeRange'
          }, {
            n: 'frame',
            ti: 'Integer',
            an: {
              lp: 'frame'
            },
            t: 'a'
          }, {
            n: 'time',
            ti: 'Calendar',
            an: {
              lp: 'time'
            },
            t: 'a'
          }]
      }, {
        ln: 'ISGetPathMapRequestType',
        tn: 'IS_GetPathMapRequestType',
        bti: '.BinaryAbstractGetMapRequestType',
        ps: [{
            n: 'path',
            rq: true,
            en: 'Path',
            ti: '.PathMapType'
          }, {
            n: 'disposition',
            an: {
              lp: 'disposition'
            },
            t: 'a'
          }, {
            n: 'styles',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'styles'
            },
            t: 'a'
          }, {
            n: 'bgcolor',
            an: {
              lp: 'bgcolor'
            },
            t: 'a'
          }, {
            n: 'transparent',
            ti: 'Boolean',
            an: {
              lp: 'transparent'
            },
            t: 'a'
          }]
      }, {
        ln: 'NamedServiceElementType',
        bti: '.ServiceElementType',
        ps: [{
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'BinaryAbstractGetMapRequestType',
        bti: '.CommonAbstractGetMapRequestType',
        ps: [{
            n: 'viewPort',
            rq: true,
            en: 'ViewPort',
            ti: '.DimensionType'
          }]
      }, {
        ln: 'ExtendedMetadataSection',
        tn: null,
        ps: [{
            n: 'abstractMetaData',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: {
              lp: 'AbstractMetaData',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'CommonAbstractGetMapRequestType',
        bti: '.AbstractRequestType',
        ps: [{
            n: 'option',
            mno: 0,
            col: true,
            en: 'Option',
            ti: '.NameValuePairType'
          }, {
            n: 'crs',
            rq: true,
            an: {
              lp: 'crs'
            },
            t: 'a'
          }, {
            n: 'metadata',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'metadata'
            },
            t: 'a'
          }]
      }, {
        ln: 'FrameOrTimeRangeRequestType.FrameRange',
        tn: null,
        ps: [{
            n: 'start',
            ti: 'Integer',
            an: {
              lp: 'start'
            },
            t: 'a'
          }, {
            n: 'end',
            ti: 'Integer',
            an: {
              lp: 'end'
            },
            t: 'a'
          }, {
            n: 'step',
            ti: 'Integer',
            an: {
              lp: 'step'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeoTransformType',
        ps: [{
            n: 'xOffset',
            rq: true,
            ti: 'Double',
            an: {
              lp: 'xOffset'
            },
            t: 'a'
          }, {
            n: 'yOffset',
            rq: true,
            ti: 'Double',
            an: {
              lp: 'yOffset'
            },
            t: 'a'
          }, {
            n: 'xScale',
            rq: true,
            ti: 'Double',
            an: {
              lp: 'xScale'
            },
            t: 'a'
          }, {
            n: 'yScale',
            rq: true,
            ti: 'Double',
            an: {
              lp: 'yScale'
            },
            t: 'a'
          }, {
            n: 'xSkew',
            rq: true,
            ti: 'Double',
            an: {
              lp: 'xSkew'
            },
            t: 'a'
          }, {
            n: 'ySkew',
            rq: true,
            ti: 'Double',
            an: {
              lp: 'ySkew'
            },
            t: 'a'
          }]
      }, {
        ln: 'CommonAbstractRequestType',
        ps: [{
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'request',
            rq: true,
            an: {
              lp: 'request'
            },
            t: 'a'
          }, {
            n: 'exceptions',
            an: {
              lp: 'exceptions'
            },
            t: 'a'
          }, {
            n: 'acceptLanguages',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'acceptLanguages'
            },
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'DispositionType',
        vs: ['ordered', 'unordered', 'replace']
      }, {
        t: 'enum',
        ln: 'NodeDepthType',
        vs: ['All', '0', '1']
      }, {
        t: 'enum',
        ln: 'ExceptionNameType',
        vs: ['XML', 'IMAGE', 'NONE', 'OTHER']
      }, {
        t: 'enum',
        ln: 'NodeCountDepthType',
        vs: ['All', '1']
      }, {
        t: 'enum',
        ln: 'ServiceNameType',
        vs: ['CS', 'IS', 'VS', 'QS', 'VCSS', 'VFS']
      }],
    eis: [{
        en: 'CS_CollectionCount',
        ti: '.CSCollectionCountType'
      }, {
        en: 'IS_Map',
        ti: '.ISMapType'
      }, {
        en: 'IS_GetPathMapInfoRequest',
        ti: '.ISGetPathMapInfoRequestType'
      }, {
        en: 'IS_GetPathMapRequest',
        ti: '.ISGetPathMapRequestType'
      }, {
        en: 'CS_GetCollectionsRequest',
        ti: '.CSGetCollectionsRequestType'
      }, {
        en: 'IS_GetMapRequest',
        ti: '.ISGetMapRequestType'
      }, {
        en: 'IS_GetMapInfoRequest',
        ti: '.ISGetMapInfoRequestType'
      }, {
        en: 'GetCapabilitiesRequest',
        ti: '.GetCapabilitiesRequestType'
      }, {
        en: 'PostContentTypeMetaData',
        ti: '.PostContentTypeMetaData',
        sh: {
          lp: 'AbstractMetaData',
          ns: 'http:\/\/www.opengis.net\/ows\/2.0'
        }
      }, {
        en: 'Capabilities',
        ti: '.CapabilitiesResponseBaseType'
      }, {
        en: 'GetHelpRequest',
        ti: '.GetHelpRequestType'
      }, {
        en: 'Help',
        ti: '.HelpResponseType'
      }, {
        en: 'VS_GetMapVideoRequest',
        ti: '.VSGetMapVideoRequestType'
      }, {
        en: 'IS_PathMapInfo',
        ti: '.ISPathMapInfoType'
      }, {
        en: 'IS_PathMap',
        ti: '.ISPathMapType'
      }, {
        en: 'ExtendedMetadataSection',
        ti: '.ExtendedMetadataSection'
      }, {
        en: 'CS_Collections',
        ti: '.CSCollectionsType'
      }, {
        en: 'CS_GetCollectionCountRequest',
        ti: '.CSGetCollectionCountRequestType'
      }, {
        en: 'IS_MapInfo',
        ti: '.ISMapInfoType'
      }, {
        en: 'VS_GetPathMapVideoRequest',
        ti: '.VSGetPathMapVideoRequestType'
      }]
  };
  return {
    WAMI_1_0_0: WAMI_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WAMI_1_0_0_Module_Factory);
}
else {
  var WAMI_1_0_0_Module = WAMI_1_0_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WAMI_1_0_0 = WAMI_1_0_0_Module.WAMI_1_0_0;
  }
  else {
    var WAMI_1_0_0 = WAMI_1_0_0_Module.WAMI_1_0_0;
  }
}