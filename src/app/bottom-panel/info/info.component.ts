import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { InfoService } from './info.service';

@Component({
  selector: 'shakemap-view-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  public info: any = null;
  public objKeys: any = Object.keys;
  
  public name_order = {
    'event_information': ['event_description', 'event_id', 'magnitude', 'depth', 'longitude', 'latitude', 'origin_time', 'src_mech', 'location', 'fault_ref', 'seismic_stations', 'dyfi'],
    'ground_motions': ['intensity', 'pga', 'pgv', 'SA(0.3)', 'SA(1.0)', 'SA(3.0)', 'bias'],
    'map_information': ['grid_span', 'grid_spacing', 'grid_points', 'min', 'max'],
    'uncertainty': ['mean_uncertainty_ratio', 'grade', 'total_flagged_mi', 'total_flagged_pgm'],
    'ground_motion_modules': ['gmpe', 'ipe', 'gmice', 'igmice', 'ccf', 'directivity', 'basin'],
    'shakemap_versions': ['shakemap_revision_id', 'map_version', 'process_time'],
    'miscellaneous': ['bias_max_mag', 'bias_max_range', 'bias_log_amp', 'bias_max_bias', 'bias_min_bias', 'bias_min_stations', 'bias_norm', 'median_dist', 'outlier_deviation_level', 'outlier_max_mag']
  }

  public names: any = {
    'event_information': {
      'location': 'Location',
      'longitude': 'longitude',
      'seismic_stations': 'Number of Seismic Stations',
      'magnitude': 'Magnitude', 
      'depth': 'Depth',
      'event_id': 'ID',
      'event_description': 'Description', 'origin_time': 'Origin Time',
      'latitude': 'Latitude', 
      'fault_ref': 'Fault References', 
      'src_mech': 'Mechanism Source',
      'dyfi': "Number of DYFI Stations"
    },
    'ground_motions': {
      'PGA': 'PGA',
      'PGV': 'PGV',
      'SA(0.3)': 'PSA03',
      'SA(1.0)': 'PSA10',
      'SA(3.0)': 'PSA30',
      'bias': 'Bias',
      'MMI': 'Intensity'
    },
    'map_information': {
        'grid_spacing': 'Grid spacing',
        'grid_points': 'Number of points',
        'grid_span': 'Span',
        'min': 'Min',
        'max': 'Max'
      },
    'uncertainty': {
        'total_flagged_mi': "Flagged seismic stations",
        'grade': 'Empirical ShakeMap grade',
        'total_flagged_pgm': 'Flagged DYFI stations',
        'mean_uncertainty_ratio': 'Mean of map uncertainty'
      },
    'ground_motion_modules': {
        'basin_correction': 'Basin',
        'gmpe': 'GMPE',
        'directivity': 'Directivity',
        'gmice': 'GMICE',
        'ipe': 'IPE',
        'ccf': 'CCF',
        'igmice': 'IGMICE'
      },
    'shakemap_versions': {
        'map_version': 'Map',
        'shakemap_revision_id': 'Code',
        'process_time': 'Date'
      },
    'micellaneous': {
        'bias_max_mag': 'Max magnitude to compute bias',
        'bias_max_range': 'Maximum distance to include station in bias',
        'bias_log_amp': 'Use log amp to compute bias',
        'bias_max_bias': 'Max allowed bias',
        'bias_min_bias': 'Min allowed bias',
        'bias_min_stations': 'Min # of stations necessary to compute bias',
        'bias_norm': 'Norm of the bias',
        'median_dist': 'Median distance used',
        'outlier_deviation_level': 'Outlier level (# of std dev)',
        'outlier_max_mag': 'Max magnitude to flag outliers',
      }
  }
  
  constructor(public infoService: InfoService) { }

  ngOnInit() {
    this.subs.push(this.infoService.info.subscribe(info => {
      this.info = info;
    }));
  }

  ngOnDestroy() {
    for (let sub of this.subs) {
      sub.unsubscribe();
    }
  }
}
